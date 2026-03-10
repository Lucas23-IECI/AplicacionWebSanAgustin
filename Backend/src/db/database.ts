import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "..", "..", "data");
const ESTUDIANTES_FILE = path.join(DATA_DIR, "estudiantes.json");
const REGISTROS_FILE = path.join(DATA_DIR, "registros.json");

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  rut: string;
  curso: string;
  nivel: "Inicial" | "Básica" | "Media";
  codigoQR: string;
  activo: boolean;
}

export interface RegistroAlmuerzo {
  id: number;
  estudianteId: number;
  fecha: string;
  hora: string;
  registradoPor: string;
}

function asegurarDirectorio(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function leerEstudiantes(): Estudiante[] {
  asegurarDirectorio();
  if (!fs.existsSync(ESTUDIANTES_FILE)) return [];
  const raw = fs.readFileSync(ESTUDIANTES_FILE, "utf-8");
  return JSON.parse(raw);
}

export function guardarEstudiantes(data: Estudiante[]): void {
  asegurarDirectorio();
  fs.writeFileSync(ESTUDIANTES_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export function leerRegistros(): RegistroAlmuerzo[] {
  asegurarDirectorio();
  if (!fs.existsSync(REGISTROS_FILE)) return [];
  const raw = fs.readFileSync(REGISTROS_FILE, "utf-8");
  return JSON.parse(raw);
}

export function guardarRegistros(data: RegistroAlmuerzo[]): void {
  asegurarDirectorio();
  fs.writeFileSync(REGISTROS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export function siguienteId(items: Array<{ id: number }>): number {
  if (items.length === 0) return 1;
  return Math.max(...items.map((i) => i.id)) + 1;
}
