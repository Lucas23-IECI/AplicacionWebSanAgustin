# Backend — Sistema de Control de Comedores

API REST para el sistema de control de comedores del Colegio San Agustín Concepción.

## Tecnologías

- **Express.js** — Framework HTTP
- **TypeScript** — Tipado estático
- **better-sqlite3** — Base de datos SQLite embebida
- **tsx** — Ejecución directa de TypeScript

## Instalación

```bash
cd Backend
npm install
```

## Comandos

```bash
npm run dev      # Servidor en modo desarrollo (hot-reload)
npm run seed     # Poblar base de datos con datos de ejemplo
npm run build    # Compilar TypeScript a JavaScript
npm start        # Iniciar servidor compilado (producción)
```

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Estado del servidor |
| GET | `/api/estudiantes` | Listar estudiantes (filtros: nivel, curso, busqueda) |
| GET | `/api/estudiantes/:id` | Obtener estudiante por ID |
| GET | `/api/estudiantes/qr/:codigo` | Buscar estudiante por código QR |
| POST | `/api/estudiantes` | Crear estudiante |
| PUT | `/api/estudiantes/:id` | Actualizar estudiante |
| POST | `/api/registros/escanear` | Registrar almuerzo por código QR |
| GET | `/api/registros/hoy` | Registros de hoy |
| GET | `/api/registros/ultimos/:n` | Últimos N registros |
| GET | `/api/registros/resumen` | Resumen del día |
| GET | `/api/registros/resumen-semanal` | Resumen últimos 5 días |
| GET | `/api/reportes/consumo-por-curso` | Consumo por curso |
| GET | `/api/reportes/estadisticas` | Estadísticas generales |

## Base de datos

SQLite embebida en `data/comedores.db`. Se crea automáticamente al iniciar el servidor.
