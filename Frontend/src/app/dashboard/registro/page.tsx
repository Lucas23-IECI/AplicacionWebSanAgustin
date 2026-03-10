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
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">
          Registro de Almuerzos
        </h2>
        <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
          <Calendar size={14} />
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Zona de escaneo */}
        <div className="lg:col-span-2 card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <UtensilsCrossed size={18} className="text-primary" />
            Escanear Tarjeta QR
          </h3>
          <LectorQR />
        </div>

        {/* Resumen rápido */}
        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">
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
      <div className="mt-6 card p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
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
