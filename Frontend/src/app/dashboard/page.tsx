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
  ArrowRight,
  Activity,
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
      {/* Saludo con banner */}
      <div className="mb-8 animate-fade-in">
        <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl p-6 sm:p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple/15 rounded-full blur-[60px] -translate-x-1/4 translate-y-1/4" />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {saludo}, Administrador 👋
              </h2>
              <p className="text-white/60 mt-1">
                Resumen de actividad del comedor — hoy
              </p>
            </div>
            <Link
              href="/dashboard/registro"
              className="btn btn-accent shadow-lg shadow-accent/25 inline-flex items-center gap-2 shrink-0"
            >
              <QrCode size={18} />
              Registrar Almuerzos
            </Link>
          </div>
        </div>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
      <div className="mb-8">
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
          className="card p-8 group flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
            <QrCode size={36} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-700 group-hover:text-primary transition-colors mb-2">
            Registro Rápido por QR
          </h3>
          <p className="text-sm text-gray-400 mb-5 max-w-xs">
            Escanea el código QR de un estudiante con la pistola lectora USB
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/5 px-4 py-2 rounded-full group-hover:bg-primary/10 transition-colors">
            Ir al registro
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        {/* Últimos registros */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <Activity size={18} className="text-primary" />
              Últimos Registros
            </h3>
            <Link href="/dashboard/registro" className="text-xs font-semibold text-primary hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="space-y-1">
            {ultimos.map((reg) => (
              <div
                key={reg.id}
                className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-xs font-bold text-primary">
                    {reg.nombreEstudiante
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {reg.nombreEstudiante}
                    </p>
                    <p className="text-xs text-gray-400">
                      {reg.cursoEstudiante}
                    </p>
                  </div>
                </div>
                <span className="badge bg-success/10 text-success text-xs font-semibold">
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
