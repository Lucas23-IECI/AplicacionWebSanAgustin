import LectorQR from "@/components/LectorQR";
import { obtenerUltimosRegistros, obtenerResumenDia } from "@/lib/datosEjemplo";
import {
  Calendar,
  UtensilsCrossed,
  Clock,
  Users,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

export default function RegistroPage() {
  const resumen = obtenerResumenDia();
  const ultimos = obtenerUltimosRegistros(8);

  return (
    <div className="space-y-6">
      {/* Header con banner */}
      <div className="animate-fade-in">
        <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl p-7 sm:p-9 overflow-hidden shadow-xl shadow-primary/10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple/12 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 glass text-white/70 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <UtensilsCrossed size={12} className="text-accent" />
                Registro Diario
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Registro de Almuerzos
              </h2>
              <p className="text-white/45 mt-1.5 font-medium">
                Escanea las tarjetas QR para registrar el almuerzo de cada estudiante
              </p>
            </div>
            <div className="inline-flex items-center gap-2 glass text-white text-sm font-medium px-5 py-3 rounded-xl shrink-0">
              <Calendar size={16} className="text-accent" />
              <span className="capitalize">
                {new Date().toLocaleDateString("es-CL", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Zona de escaneo */}
        <div className="lg:col-span-2 card p-6 sm:p-8">
          <h3 className="text-lg font-black text-gray-800 mb-5 flex items-center gap-2.5 tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <UtensilsCrossed size={18} className="text-primary" />
            </div>
            Escanear Tarjeta QR
          </h3>
          <LectorQR />
        </div>

        {/* Resumen rápido */}
        <div className="space-y-5">
          <div className="card p-6">
            <h3 className="text-sm font-bold text-gray-500 mb-5 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Resumen del Día
            </h3>
            <div className="space-y-3">
              {[
                {
                  label: "Almorzaron",
                  value: resumen.almorzaron,
                  icon: UtensilsCrossed,
                  color: "text-success",
                },
                {
                  label: "Pendientes",
                  value: resumen.pendientes,
                  icon: Clock,
                  color: "text-warning",
                },
                {
                  label: "Total",
                  value: resumen.totalEstudiantes,
                  icon: Users,
                  color: "text-gray-700",
                },
              ].map((item) => {
                const Icono = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icono size={14} className="text-gray-400" />
                      {item.label}
                    </div>
                    <span className={`text-lg font-bold ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                );
              })}
              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp size={14} className="text-gray-400" />
                    Avance
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {resumen.porcentaje}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      resumen.porcentaje >= 80
                        ? "bg-gradient-to-r from-success to-emerald-400"
                        : "bg-gradient-to-r from-accent to-yellow-400"
                    }`}
                    style={{ width: `${resumen.porcentaje}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Códigos de prueba */}
          <div className="card p-4 bg-primary/5 border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={14} className="text-primary" />
              <p className="text-xs font-semibold text-primary">
                Códigos de prueba:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                "SA-PK-001",
                "SA-1B-001",
                "SA-5B-001",
                "SA-1M-001",
                "SA-4M-001",
                "SA-3B-002",
              ].map((codigo) => (
                <code
                  key={codigo}
                  className="text-xs bg-white px-2.5 py-1.5 rounded-lg text-primary font-mono border border-primary/10"
                >
                  {codigo}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Últimos registros */}
      <div className="card p-6 sm:p-8">
        <h3 className="text-lg font-black text-gray-800 mb-5 flex items-center gap-2.5 tracking-tight">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <Clock size={18} className="text-primary" />
          </div>
          Últimos Registros de Hoy
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                  Hora
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                  Estudiante
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                  Curso
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                  Registrado por
                </th>
              </tr>
            </thead>
            <tbody>
              {ultimos.map((reg) => (
                <tr
                  key={reg.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <span className="badge bg-gray-100 text-gray-600 text-xs">
                      {reg.hora}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                        {reg.nombreEstudiante
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <span className="font-medium text-gray-800">
                        {reg.nombreEstudiante}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {reg.cursoEstudiante}
                  </td>
                  <td className="py-3 px-4 text-gray-400">
                    {reg.registradoPor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
