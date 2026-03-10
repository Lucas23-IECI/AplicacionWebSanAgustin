import type {
  Estudiante,
  RegistroAlmuerzo,
  Curso,
  ResumenDiario,
  NivelEducativo,
  ResultadoEscaneo,
} from "@/types";

// ==========================================
// Datos de ejemplo — Estudiantes
// ==========================================

export const estudiantes: Estudiante[] = [
  // Ciclo Inicial
  { id: "1", nombre: "Sofía", apellido: "Muñoz Soto", rut: "23.456.789-0", curso: "Pre-Kinder", nivel: "Inicial", codigoQR: "SA-PK-001", activo: true },
  { id: "2", nombre: "Matías", apellido: "González Díaz", rut: "23.567.890-1", curso: "Pre-Kinder", nivel: "Inicial", codigoQR: "SA-PK-002", activo: true },
  { id: "3", nombre: "Isidora", apellido: "Rojas Pérez", rut: "23.678.901-2", curso: "Kinder", nivel: "Inicial", codigoQR: "SA-KI-001", activo: true },

  // Ciclo Básica
  { id: "4", nombre: "Benjamín", apellido: "Silva Araya", rut: "22.789.012-3", curso: "1° Básico", nivel: "Básica", codigoQR: "SA-1B-001", activo: true },
  { id: "5", nombre: "Emilia", apellido: "Contreras López", rut: "22.890.123-4", curso: "1° Básico", nivel: "Básica", codigoQR: "SA-1B-002", activo: true },
  { id: "6", nombre: "Lucas", apellido: "Fernández Ruiz", rut: "21.901.234-5", curso: "3° Básico", nivel: "Básica", codigoQR: "SA-3B-001", activo: true },
  { id: "7", nombre: "Valentina", apellido: "Morales Torres", rut: "21.012.345-6", curso: "3° Básico", nivel: "Básica", codigoQR: "SA-3B-002", activo: true },
  { id: "8", nombre: "Agustín", apellido: "Herrera Pino", rut: "20.123.456-7", curso: "5° Básico", nivel: "Básica", codigoQR: "SA-5B-001", activo: true },
  { id: "9", nombre: "Catalina", apellido: "Sepúlveda Vera", rut: "20.234.567-8", curso: "5° Básico", nivel: "Básica", codigoQR: "SA-5B-002", activo: true },
  { id: "10", nombre: "Tomás", apellido: "Vargas Núñez", rut: "19.345.678-9", curso: "7° Básico", nivel: "Básica", codigoQR: "SA-7B-001", activo: true },
  { id: "11", nombre: "Florencia", apellido: "Jara Fuentes", rut: "19.456.789-0", curso: "7° Básico", nivel: "Básica", codigoQR: "SA-7B-002", activo: true },
  { id: "12", nombre: "Martín", apellido: "Espinoza Castillo", rut: "18.567.890-1", curso: "8° Básico", nivel: "Básica", codigoQR: "SA-8B-001", activo: true },

  // Ciclo Media
  { id: "13", nombre: "Antonia", apellido: "Reyes Salazar", rut: "21.678.901-2", curso: "1° Medio", nivel: "Media", codigoQR: "SA-1M-001", activo: true },
  { id: "14", nombre: "Nicolás", apellido: "Tapia Bravo", rut: "21.789.012-3", curso: "1° Medio", nivel: "Media", codigoQR: "SA-1M-002", activo: true },
  { id: "15", nombre: "Javiera", apellido: "Campos Riquelme", rut: "20.890.123-4", curso: "2° Medio", nivel: "Media", codigoQR: "SA-2M-001", activo: true },
  { id: "16", nombre: "Sebastián", apellido: "Figueroa Leiva", rut: "20.901.234-5", curso: "2° Medio", nivel: "Media", codigoQR: "SA-2M-002", activo: true },
  { id: "17", nombre: "Amanda", apellido: "Pizarro Molina", rut: "19.012.345-6", curso: "3° Medio", nivel: "Media", codigoQR: "SA-3M-001", activo: true },
  { id: "18", nombre: "Diego", apellido: "Gutiérrez Aravena", rut: "19.123.456-7", curso: "3° Medio", nivel: "Media", codigoQR: "SA-3M-002", activo: true },
  { id: "19", nombre: "Constanza", apellido: "Alarcón Vega", rut: "18.234.567-8", curso: "4° Medio", nivel: "Media", codigoQR: "SA-4M-001", activo: true },
  { id: "20", nombre: "Felipe", apellido: "Ríos Henríquez", rut: "18.345.678-9", curso: "4° Medio", nivel: "Media", codigoQR: "SA-4M-002", activo: true },
];

// ==========================================
// Datos de ejemplo — Registros del día
// ==========================================

const fechaHoy = new Date().toISOString().split("T")[0];

export const registrosHoy: RegistroAlmuerzo[] = [
  { id: "r1", estudianteId: "1", fecha: fechaHoy, hora: "12:15", registradoPor: "Personal Comedor" },
  { id: "r2", estudianteId: "4", fecha: fechaHoy, hora: "12:18", registradoPor: "Personal Comedor" },
  { id: "r3", estudianteId: "6", fecha: fechaHoy, hora: "12:22", registradoPor: "Personal Comedor" },
  { id: "r4", estudianteId: "8", fecha: fechaHoy, hora: "12:25", registradoPor: "Personal Comedor" },
  { id: "r5", estudianteId: "10", fecha: fechaHoy, hora: "12:30", registradoPor: "Personal Comedor" },
  { id: "r6", estudianteId: "13", fecha: fechaHoy, hora: "12:35", registradoPor: "Personal Comedor" },
  { id: "r7", estudianteId: "15", fecha: fechaHoy, hora: "12:40", registradoPor: "Personal Comedor" },
  { id: "r8", estudianteId: "17", fecha: fechaHoy, hora: "12:45", registradoPor: "Personal Comedor" },
  { id: "r9", estudianteId: "19", fecha: fechaHoy, hora: "12:50", registradoPor: "Personal Comedor" },
  { id: "r10", estudianteId: "3", fecha: fechaHoy, hora: "12:55", registradoPor: "Personal Comedor" },
  { id: "r11", estudianteId: "7", fecha: fechaHoy, hora: "13:00", registradoPor: "Personal Comedor" },
  { id: "r12", estudianteId: "14", fecha: fechaHoy, hora: "13:05", registradoPor: "Personal Comedor" },
];

// ==========================================
// Datos de ejemplo — Resumen semanal
// ==========================================

export const resumenSemanal: ResumenDiario[] = [
  { fecha: "2026-03-09", totalEstudiantes: 20, almorzaron: 15, pendientes: 5, porcentaje: 75 },
  { fecha: "2026-03-08", totalEstudiantes: 20, almorzaron: 18, pendientes: 2, porcentaje: 90 },
  { fecha: "2026-03-07", totalEstudiantes: 20, almorzaron: 16, pendientes: 4, porcentaje: 80 },
  { fecha: "2026-03-06", totalEstudiantes: 20, almorzaron: 14, pendientes: 6, porcentaje: 70 },
  { fecha: "2026-03-05", totalEstudiantes: 20, almorzaron: 17, pendientes: 3, porcentaje: 85 },
];

// ==========================================
// Funciones helper
// ==========================================

export function buscarPorCodigoQR(codigo: string): Estudiante | undefined {
  return estudiantes.find((e) => e.codigoQR === codigo);
}

export function yaAlmorzoHoy(estudianteId: string): boolean {
  return registrosHoy.some((r) => r.estudianteId === estudianteId);
}

export function procesarEscaneo(codigo: string): ResultadoEscaneo {
  const estudiante = buscarPorCodigoQR(codigo);

  if (!estudiante) {
    return { estado: "no-encontrado", mensaje: "Código QR no reconocido" };
  }

  if (yaAlmorzoHoy(estudiante.id)) {
    return {
      estado: "duplicado",
      estudiante,
      mensaje: `${estudiante.nombre} ${estudiante.apellido} ya almorzó hoy`,
    };
  }

  return {
    estado: "exito",
    estudiante,
    mensaje: `Almuerzo registrado — ${estudiante.nombre} ${estudiante.apellido}`,
  };
}

export function filtrarPorCurso(curso: string): Estudiante[] {
  return estudiantes.filter((e) => e.curso === curso);
}

export function filtrarPorNivel(nivel: NivelEducativo): Estudiante[] {
  return estudiantes.filter((e) => e.nivel === nivel);
}

export function obtenerCursos(): Curso[] {
  const cursosMap = new Map<string, Curso>();
  for (const est of estudiantes) {
    const existente = cursosMap.get(est.curso);
    if (existente) {
      existente.cantidadEstudiantes++;
    } else {
      cursosMap.set(est.curso, {
        nombre: est.curso,
        nivel: est.nivel,
        cantidadEstudiantes: 1,
      });
    }
  }
  return Array.from(cursosMap.values());
}

export function obtenerResumenDia(): ResumenDiario {
  const totalEstudiantes = estudiantes.filter((e) => e.activo).length;
  const almorzaron = registrosHoy.length;
  const pendientes = totalEstudiantes - almorzaron;
  const porcentaje = totalEstudiantes > 0
    ? Math.round((almorzaron / totalEstudiantes) * 100)
    : 0;

  return {
    fecha: fechaHoy,
    totalEstudiantes,
    almorzaron,
    pendientes,
    porcentaje,
  };
}

export function obtenerUltimosRegistros(cantidad: number = 5) {
  return registrosHoy
    .slice(-cantidad)
    .reverse()
    .map((registro) => {
      const estudiante = estudiantes.find((e) => e.id === registro.estudianteId);
      return {
        ...registro,
        nombreEstudiante: estudiante
          ? `${estudiante.nombre} ${estudiante.apellido}`
          : "Desconocido",
        cursoEstudiante: estudiante?.curso ?? "",
      };
    });
}
