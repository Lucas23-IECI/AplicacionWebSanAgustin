import TarjetaResumen from "@/components/TarjetaResumen";
import BarraProgreso from "@/components/BarraProgreso";
import { obtenerResumenDia, obtenerUltimosRegistros } from "@/lib/datosEjemplo";
import Link from "next/link";
import {
  UtensilsCrossed,
  Users,
  Clock,
  TrendingUp,
  QrCode,
  ChevronRight,
} from "lucide-react";

export default function DashboardPage() {
  const resumen = obtenerResumenDia();
  const ultimos = obtenerUltimosRegistros(5);

  const saludo = (() => {
    const hora = new Date().getHours();
    if (hora < 12) return "Buenos días";
    if (hora < 18) return "Buenas tardes";
    return "Buenas noches";
  })();

  return (
    <div>
      {/* Saludo */}
      <div className="mb-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">
          {saludo}, Administrador
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Resumen de actividad del comedor — hoy
        </p>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <TarjetaResumen
          titulo="Almuerzos Hoy"
          valor={resumen.almorzaron}
          subtexto={`de ${resumen.totalEstudiantes} estudiantes`}
          icono={UtensilsCrossed}
          colorClase="text-primary bg-primary/10"
        />
        <TarjetaResumen
          titulo="Estudiantes Activos"
          valor={resumen.totalEstudiantes}
          subtexto="total en el sistema"
          icono={Users}
          colorClase="text-success bg-success/10"
        />
        <TarjetaResumen
          titulo="Pendientes"
          valor={resumen.pendientes}
          subtexto="sin registrar almuerzo"
          icono={Clock}
          colorClase="text-warning bg-warning/10"
        />
        <TarjetaResumen
          titulo="Tasa de Consumo"
          valor={`${resumen.porcentaje}%`}
          subtexto="del día actual"
          icono={TrendingUp}
          colorClase="text-accent bg-accent/10"
        />
      </div>

      {/* Barra de progreso */}
      <div className="mb-6">
        <BarraProgreso
          actual={resumen.almorzaron}
          total={resumen.totalEstudiantes}
          etiqueta="Progreso de almuerzos del día"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Acceso rápido a registro */}
        <Link
          href="/dashboard/registro"
          className="card p-6 group flex flex-col items-center justify-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <QrCode size={32} className="text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 group-hover:text-primary transition-colors mb-1">
            Registro Rápido por QR
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Escanea el código QR de un estudiante
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Ir al registro
            <ChevronRight size={16} />
          </span>
        </Link>

        {/* Últimos registros */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Últimos Registros
          </h3>
          <div className="space-y-3">
            {ultimos.map((reg) => (
              <div
                key={reg.id}
                className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {reg.nombreEstudiante
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {reg.nombreEstudiante}
                    </p>
                    <p className="text-xs text-gray-400">
                      {reg.cursoEstudiante}
                    </p>
                  </div>
                </div>
                <span className="badge bg-gray-100 text-gray-500 text-xs">
                  {reg.hora}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
