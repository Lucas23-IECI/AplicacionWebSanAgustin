import { Router } from "express";
import {
  leerEstudiantes,
  guardarEstudiantes,
  siguienteId,
  type Estudiante,
} from "../db/database.js";

const router = Router();

// GET /api/estudiantes/cursos/lista — obtener cursos únicos con conteo
// NOTA: debe ir ANTES de /:id para no matchear "cursos" como id
router.get("/cursos/lista", (_req, res) => {
  const estudiantes = leerEstudiantes().filter((e) => e.activo);

  const mapa = new Map<string, { nombre: string; nivel: string; cantidadEstudiantes: number }>();
  for (const e of estudiantes) {
    const key = `${e.curso}|${e.nivel}`;
    const entry = mapa.get(key);
    if (entry) {
      entry.cantidadEstudiantes++;
    } else {
      mapa.set(key, { nombre: e.curso, nivel: e.nivel, cantidadEstudiantes: 1 });
    }
  }

  const cursos = Array.from(mapa.values()).sort((a, b) =>
    a.nivel.localeCompare(b.nivel) || a.nombre.localeCompare(b.nombre)
  );

  res.json(cursos);
});

// GET /api/estudiantes — listar todos (con filtros opcionales)
router.get("/", (req, res) => {
  const { nivel, curso, busqueda, activo } = req.query;
  let estudiantes = leerEstudiantes();

  if (nivel && nivel !== "Todos") {
    estudiantes = estudiantes.filter((e) => e.nivel === nivel);
  }

  if (curso && curso !== "Todos") {
    estudiantes = estudiantes.filter((e) => e.curso === curso);
  }

  if (busqueda) {
    const term = (busqueda as string).toLowerCase();
    estudiantes = estudiantes.filter(
      (e) =>
        e.nombre.toLowerCase().includes(term) ||
        e.apellido.toLowerCase().includes(term) ||
        e.rut.toLowerCase().includes(term)
    );
  }

  if (activo !== undefined) {
    const esActivo = activo === "true";
    estudiantes = estudiantes.filter((e) => e.activo === esActivo);
  }

  estudiantes.sort((a, b) =>
    a.curso.localeCompare(b.curso) ||
    a.apellido.localeCompare(b.apellido) ||
    a.nombre.localeCompare(b.nombre)
  );

  res.json(estudiantes);
});

// GET /api/estudiantes/qr/:codigo — buscar por código QR
router.get("/qr/:codigo", (req, res) => {
  const est = leerEstudiantes().find((e) => e.codigoQR === req.params.codigo);

  if (!est) {
    res.status(404).json({ error: "Código QR no reconocido" });
    return;
  }

  res.json(est);
});

// GET /api/estudiantes/:id — obtener uno
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const est = leerEstudiantes().find((e) => e.id === id);

  if (!est) {
    res.status(404).json({ error: "Estudiante no encontrado" });
    return;
  }

  res.json(est);
});

// POST /api/estudiantes — crear estudiante
router.post("/", (req, res) => {
  const { nombre, apellido, rut, curso, nivel, codigoQR } = req.body;

  if (!nombre || !apellido || !rut || !curso || !nivel || !codigoQR) {
    res.status(400).json({ error: "Todos los campos son obligatorios" });
    return;
  }

  const estudiantes = leerEstudiantes();

  if (estudiantes.some((e) => e.rut === rut)) {
    res.status(409).json({ error: "El RUT ya existe" });
    return;
  }
  if (estudiantes.some((e) => e.codigoQR === codigoQR)) {
    res.status(409).json({ error: "El código QR ya existe" });
    return;
  }

  const nuevo: Estudiante = {
    id: siguienteId(estudiantes),
    nombre,
    apellido,
    rut,
    curso,
    nivel,
    codigoQR,
    activo: true,
  };

  estudiantes.push(nuevo);
  guardarEstudiantes(estudiantes);

  res.status(201).json({ id: nuevo.id, message: "Estudiante creado" });
});

// PUT /api/estudiantes/:id — actualizar estudiante
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const estudiantes = leerEstudiantes();
  const idx = estudiantes.findIndex((e) => e.id === id);

  if (idx === -1) {
    res.status(404).json({ error: "Estudiante no encontrado" });
    return;
  }

  const { nombre, apellido, rut, curso, nivel, codigoQR, activo } = req.body;

  estudiantes[idx] = {
    ...estudiantes[idx],
    nombre: nombre ?? estudiantes[idx].nombre,
    apellido: apellido ?? estudiantes[idx].apellido,
    rut: rut ?? estudiantes[idx].rut,
    curso: curso ?? estudiantes[idx].curso,
    nivel: nivel ?? estudiantes[idx].nivel,
    codigoQR: codigoQR ?? estudiantes[idx].codigoQR,
    activo: activo !== undefined ? activo : estudiantes[idx].activo,
  };

  guardarEstudiantes(estudiantes);
  res.json({ message: "Estudiante actualizado" });
});

export default router;
