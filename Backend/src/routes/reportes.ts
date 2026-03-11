import { Router } from "express";
import { leerEstudiantes, leerRegistros } from "../db/database.js";

const router = Router();

// GET /api/reportes/consumo-por-curso — consumo por curso hoy
router.get("/consumo-por-curso", (req, res) => {
  const fecha =
    (req.query.fecha as string) || new Date().toISOString().split("T")[0];

  const estudiantes = leerEstudiantes().filter((e) => e.activo);
  const registros = leerRegistros().filter((r) => r.fecha === fecha);
  const idsAlmorzaron = new Set(registros.map((r) => r.estudianteId));

  const mapa = new Map<
    string,
    { nombre: string; nivel: string; total: number; almorzaron: number }
  >();

  for (const e of estudiantes) {
    const key = `${e.curso}|${e.nivel}`;
    const entry = mapa.get(key);
    const almorzo = idsAlmorzaron.has(e.id) ? 1 : 0;
    if (entry) {
      entry.total++;
      entry.almorzaron += almorzo;
    } else {
      mapa.set(key, {
        nombre: e.curso,
        nivel: e.nivel,
        total: 1,
        almorzaron: almorzo,
      });
    }
  }

  const cursos = Array.from(mapa.values())
    .sort((a, b) => a.nivel.localeCompare(b.nivel) || a.nombre.localeCompare(b.nombre))
    .map((c) => ({
      nombre: c.nombre,
      nivel: c.nivel,
      cantidadEstudiantes: c.total,
      almorzaron: c.almorzaron,
      porcentaje: c.total > 0 ? Math.round((c.almorzaron / c.total) * 100) : 0,
    }));

  res.json(cursos);
});

// GET /api/reportes/estadisticas — estadísticas generales
router.get("/estadisticas", (_req, res) => {
  const hoy = new Date().toISOString().split("T")[0];

  const estudiantes = leerEstudiantes().filter((e) => e.activo);
  const totalEstudiantes = estudiantes.length;

  const registros = leerRegistros();
  const almorzaronHoy = registros.filter((r) => r.fecha === hoy).length;

  // Registros de la última semana
  const hace7Dias = new Date();
  hace7Dias.setDate(hace7Dias.getDate() - 7);
  const fechaLimite = hace7Dias.toISOString().split("T")[0];
  const totalRegistrosSemana = registros.filter(
    (r) => r.fecha >= fechaLimite
  ).length;

  // Por nivel
  const idsAlmorzaronHoy = new Set(
    registros.filter((r) => r.fecha === hoy).map((r) => r.estudianteId)
  );

  const niveles = new Map<string, { total: number; almorzaronHoy: number }>();
  for (const e of estudiantes) {
    const entry = niveles.get(e.nivel);
    const almorzo = idsAlmorzaronHoy.has(e.id) ? 1 : 0;
    if (entry) {
      entry.total++;
      entry.almorzaronHoy += almorzo;
    } else {
      niveles.set(e.nivel, { total: 1, almorzaronHoy: almorzo });
    }
  }

  const porNivel = Array.from(niveles.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([nivel, data]) => ({
      nivel,
      total: data.total,
      almorzaronHoy: data.almorzaronHoy,
      porcentaje:
        data.total > 0
          ? Math.round((data.almorzaronHoy / data.total) * 100)
          : 0,
    }));

  res.json({
    totalEstudiantes,
    almorzaronHoy,
    pendientesHoy: totalEstudiantes - almorzaronHoy,
    porcentajeHoy:
      totalEstudiantes > 0
        ? Math.round((almorzaronHoy / totalEstudiantes) * 100)
        : 0,
    totalRegistrosSemana,
    porNivel,
  });
});

export default router;
