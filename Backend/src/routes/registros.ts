import { Router } from "express";
import {
  leerEstudiantes,
  leerRegistros,
  guardarRegistros,
  siguienteId,
} from "../db/database.js";

const router = Router();

// POST /api/registros/escanear — registrar almuerzo por código QR
router.post("/escanear", (req, res) => {
  const { codigoQR } = req.body;

  if (!codigoQR) {
    res.status(400).json({ estado: "error", mensaje: "Código QR requerido" });
    return;
  }

  const estudiante = leerEstudiantes().find(
    (e) => e.codigoQR === codigoQR && e.activo
  );

  if (!estudiante) {
    res.json({ estado: "no-encontrado", mensaje: "Código QR no reconocido" });
    return;
  }

  const hoy = new Date().toISOString().split("T")[0];
  const registros = leerRegistros();

  // Verificar si ya almorzó hoy
  const yaRegistrado = registros.some(
    (r) => r.estudianteId === estudiante.id && r.fecha === hoy
  );

  if (yaRegistrado) {
    res.json({
      estado: "duplicado",
      mensaje: `${estudiante.nombre} ${estudiante.apellido} ya almorzó hoy`,
      estudiante: {
        id: estudiante.id,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        curso: estudiante.curso,
        nivel: estudiante.nivel,
        codigoQR: estudiante.codigoQR,
      },
    });
    return;
  }

  const hora = new Date().toLocaleTimeString("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  registros.push({
    id: siguienteId(registros),
    estudianteId: estudiante.id,
    fecha: hoy,
    hora,
    registradoPor: "Personal Comedor",
  });

  guardarRegistros(registros);

  res.json({
    estado: "exito",
    mensaje: `Almuerzo registrado — ${estudiante.nombre} ${estudiante.apellido}`,
    estudiante: {
      id: estudiante.id,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      curso: estudiante.curso,
      nivel: estudiante.nivel,
      codigoQR: estudiante.codigoQR,
    },
  });
});

// GET /api/registros/hoy — obtener registros de hoy
router.get("/hoy", (_req, res) => {
  const hoy = new Date().toISOString().split("T")[0];
  const registros = leerRegistros().filter((r) => r.fecha === hoy);
  const estudiantes = leerEstudiantes();

  const resultado = registros
    .map((r) => {
      const est = estudiantes.find((e) => e.id === r.estudianteId);
      if (!est) return null;
      return {
        id: r.id,
        fecha: r.fecha,
        hora: r.hora,
        registradoPor: r.registradoPor,
        estudianteId: est.id,
        nombre: est.nombre,
        apellido: est.apellido,
        curso: est.curso,
        nivel: est.nivel,
        codigoQR: est.codigoQR,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b!.hora.localeCompare(a!.hora));

  res.json(resultado);
});

// GET /api/registros/ultimos/:cantidad — últimos N registros de hoy
router.get("/ultimos/:cantidad", (req, res) => {
  const hoy = new Date().toISOString().split("T")[0];
  const cantidad = Math.min(parseInt(req.params.cantidad) || 5, 50);
  const registros = leerRegistros().filter((r) => r.fecha === hoy);
  const estudiantes = leerEstudiantes();

  const resultado = registros
    .map((r) => {
      const est = estudiantes.find((e) => e.id === r.estudianteId);
      if (!est) return null;
      return {
        id: r.id,
        fecha: r.fecha,
        hora: r.hora,
        registradoPor: r.registradoPor,
        estudianteId: est.id,
        nombre: est.nombre,
        apellido: est.apellido,
        curso: est.curso,
        nivel: est.nivel,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b!.hora.localeCompare(a!.hora))
    .slice(0, cantidad);

  res.json(resultado);
});

// GET /api/registros/resumen — resumen del día
router.get("/resumen", (req, res) => {
  const fecha =
    (req.query.fecha as string) || new Date().toISOString().split("T")[0];

  const totalEstudiantes = leerEstudiantes().filter((e) => e.activo).length;
  const almorzaron = leerRegistros().filter((r) => r.fecha === fecha).length;
  const pendientes = totalEstudiantes - almorzaron;
  const porcentaje =
    totalEstudiantes > 0
      ? Math.round((almorzaron / totalEstudiantes) * 100)
      : 0;

  res.json({ fecha, totalEstudiantes, almorzaron, pendientes, porcentaje });
});

// GET /api/registros/resumen-semanal — resumen últimos 5 días
router.get("/resumen-semanal", (_req, res) => {
  const totalEstudiantes = leerEstudiantes().filter((e) => e.activo).length;
  const registros = leerRegistros();

  const resumen = [];
  for (let i = 0; i < 5; i++) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() - i);
    const fechaStr = fecha.toISOString().split("T")[0];

    const almorzaron = registros.filter((r) => r.fecha === fechaStr).length;

    resumen.push({
      fecha: fechaStr,
      totalEstudiantes,
      almorzaron,
      pendientes: totalEstudiantes - almorzaron,
      porcentaje:
        totalEstudiantes > 0
          ? Math.round((almorzaron / totalEstudiantes) * 100)
          : 0,
    });
  }

  res.json(resumen);
});

export default router;
