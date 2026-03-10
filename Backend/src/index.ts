import express from "express";
import cors from "cors";
import estudiantesRouter from "./routes/estudiantes.js";
import registrosRouter from "./routes/registros.js";
import reportesRouter from "./routes/reportes.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3002"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

console.log("📦 Base de datos JSON inicializada");

// Rutas de la API
app.use("/api/estudiantes", estudiantesRouter);
app.use("/api/registros", registrosRouter);
app.use("/api/reportes", reportesRouter);

// Ruta de salud
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "Backend San Agustín — Control de Comedores",
  });
});

// Manejo de rutas no encontradas
app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   GET    /api/health`);
  console.log(`   GET    /api/estudiantes`);
  console.log(`   GET    /api/estudiantes/:id`);
  console.log(`   GET    /api/estudiantes/qr/:codigo`);
  console.log(`   POST   /api/estudiantes`);
  console.log(`   PUT    /api/estudiantes/:id`);
  console.log(`   POST   /api/registros/escanear`);
  console.log(`   GET    /api/registros/hoy`);
  console.log(`   GET    /api/registros/ultimos/:cantidad`);
  console.log(`   GET    /api/registros/resumen`);
  console.log(`   GET    /api/registros/resumen-semanal`);
  console.log(`   GET    /api/reportes/consumo-por-curso`);
  console.log(`   GET    /api/reportes/estadisticas`);
});
