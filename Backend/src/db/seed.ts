import {
  Estudiante,
  RegistroAlmuerzo,
  guardarEstudiantes,
  guardarRegistros,
} from "./database.js";

const estudiantes: Estudiante[] = [
  // Ciclo Inicial
  { id: 1, nombre: "Sofía", apellido: "Muñoz Soto", rut: "23.456.789-0", curso: "Pre-Kinder", nivel: "Inicial", codigoQR: "SA-PK-001", activo: true },
  { id: 2, nombre: "Matías", apellido: "González Díaz", rut: "23.567.890-1", curso: "Pre-Kinder", nivel: "Inicial", codigoQR: "SA-PK-002", activo: true },
  { id: 3, nombre: "Isidora", apellido: "Rojas Pérez", rut: "23.678.901-2", curso: "Kinder", nivel: "Inicial", codigoQR: "SA-KI-001", activo: true },

  // Ciclo Básica
  { id: 4, nombre: "Benjamín", apellido: "Silva Araya", rut: "22.789.012-3", curso: "1° Básico", nivel: "Básica", codigoQR: "SA-1B-001", activo: true },
  { id: 5, nombre: "Emilia", apellido: "Contreras López", rut: "22.890.123-4", curso: "1° Básico", nivel: "Básica", codigoQR: "SA-1B-002", activo: true },
  { id: 6, nombre: "Lucas", apellido: "Fernández Ruiz", rut: "21.901.234-5", curso: "3° Básico", nivel: "Básica", codigoQR: "SA-3B-001", activo: true },
  { id: 7, nombre: "Valentina", apellido: "Morales Torres", rut: "21.012.345-6", curso: "3° Básico", nivel: "Básica", codigoQR: "SA-3B-002", activo: true },
  { id: 8, nombre: "Agustín", apellido: "Herrera Pino", rut: "20.123.456-7", curso: "5° Básico", nivel: "Básica", codigoQR: "SA-5B-001", activo: true },
  { id: 9, nombre: "Catalina", apellido: "Sepúlveda Vera", rut: "20.234.567-8", curso: "5° Básico", nivel: "Básica", codigoQR: "SA-5B-002", activo: true },
  { id: 10, nombre: "Tomás", apellido: "Vargas Núñez", rut: "19.345.678-9", curso: "7° Básico", nivel: "Básica", codigoQR: "SA-7B-001", activo: true },
  { id: 11, nombre: "Florencia", apellido: "Jara Fuentes", rut: "19.456.789-0", curso: "7° Básico", nivel: "Básica", codigoQR: "SA-7B-002", activo: true },
  { id: 12, nombre: "Martín", apellido: "Espinoza Castillo", rut: "18.567.890-1", curso: "8° Básico", nivel: "Básica", codigoQR: "SA-8B-001", activo: true },

  // Ciclo Media
  { id: 13, nombre: "Antonia", apellido: "Reyes Salazar", rut: "21.678.901-2", curso: "1° Medio", nivel: "Media", codigoQR: "SA-1M-001", activo: true },
  { id: 14, nombre: "Nicolás", apellido: "Tapia Bravo", rut: "21.789.012-3", curso: "1° Medio", nivel: "Media", codigoQR: "SA-1M-002", activo: true },
  { id: 15, nombre: "Javiera", apellido: "Campos Riquelme", rut: "20.890.123-4", curso: "2° Medio", nivel: "Media", codigoQR: "SA-2M-001", activo: true },
  { id: 16, nombre: "Sebastián", apellido: "Figueroa Leiva", rut: "20.901.234-5", curso: "2° Medio", nivel: "Media", codigoQR: "SA-2M-002", activo: true },
  { id: 17, nombre: "Amanda", apellido: "Pizarro Molina", rut: "19.012.345-6", curso: "3° Medio", nivel: "Media", codigoQR: "SA-3M-001", activo: true },
  { id: 18, nombre: "Diego", apellido: "Gutiérrez Aravena", rut: "19.123.456-7", curso: "3° Medio", nivel: "Media", codigoQR: "SA-3M-002", activo: true },
  { id: 19, nombre: "Constanza", apellido: "Alarcón Vega", rut: "18.234.567-8", curso: "4° Medio", nivel: "Media", codigoQR: "SA-4M-001", activo: true },
  { id: 20, nombre: "Felipe", apellido: "Ríos Henríquez", rut: "18.345.678-9", curso: "4° Medio", nivel: "Media", codigoQR: "SA-4M-002", activo: true },
];

function seed() {
  // Guardar estudiantes
  guardarEstudiantes(estudiantes);

  // Insertar algunos registros de almuerzo de hoy
  const hoy = new Date().toISOString().split("T")[0];
  const idsAlmorzaron = [1, 4, 6, 8, 10, 13, 15, 17, 19, 3, 7, 14];
  const horas = ["12:15", "12:18", "12:22", "12:25", "12:30", "12:35", "12:40", "12:45", "12:50", "12:55", "13:00", "13:05"];

  const registros: RegistroAlmuerzo[] = idsAlmorzaron.map((estId, i) => ({
    id: i + 1,
    estudianteId: estId,
    fecha: hoy,
    hora: horas[i],
    registradoPor: "Personal Comedor",
  }));

  guardarRegistros(registros);

  console.log(`✅ Seed completado:`);
  console.log(`   → ${estudiantes.length} estudiantes insertados`);
  console.log(`   → ${registros.length} registros de almuerzo insertados`);
}

seed();
