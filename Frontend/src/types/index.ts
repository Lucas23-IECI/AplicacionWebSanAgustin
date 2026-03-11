// Tipos del sistema de control de comedores

export type NivelEducativo = "Inicial" | "Básica" | "Media";

export interface Estudiante {
  id: string;
  nombre: string;
  apellido: string;
  rut: string;
  curso: string;
  nivel: NivelEducativo;
  codigoQR: string;
  activo: boolean;
}

export interface RegistroAlmuerzo {
  id: string;
  estudianteId: string;
  fecha: string; // formato YYYY-MM-DD
  hora: string; // formato HH:MM
  registradoPor: string;
}

export interface Curso {
  nombre: string;
  nivel: NivelEducativo;
  cantidadEstudiantes: number;
}

export interface ResumenDiario {
  fecha: string;
  totalEstudiantes: number;
  almorzaron: number;
  pendientes: number;
  porcentaje: number;
}

export type EstadoRegistro = "exito" | "duplicado" | "no-encontrado";

export interface ResultadoEscaneo {
  estado: EstadoRegistro;
  estudiante?: Estudiante;
  mensaje: string;
}
