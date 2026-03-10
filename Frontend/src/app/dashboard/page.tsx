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
  ArrowRight,
  Activity,
  Sparkles,
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
    <div className="space-y-8">
      {/* Saludo con banner */}
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
                <Sparkles size={12} className="text-accent" />
                Panel de Control
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {saludo}, Administrador
              </h2>
              <p className="text-white/45 mt-1.5 font-medium">
                Resumen de actividad del comedor — hoy
              </p>
            </div>
            <Link
              href="/dashboard/registro"
              className="btn btn-accent shadow-xl shadow-accent/30 inline-flex items-center gap-2 shrink-0 py-3.5 px-6 font-bold"
            >
              <QrCode size={18} />
              Registrar Almuerzos
            </Link>
          </div>
        </div>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      <BarraProgreso
        actual={resumen.almorzaron}
        total={resumen.totalEstudiantes}
        etiqueta="Progreso de almuerzos del día"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Acceso rápido a registro */}
        <Link
          href="/dashboard/registro"
          className="card p-8 sm:p-10 group flex flex-col items-center justify-center text-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/30">
            <QrCode size={36} className="text-white" />
          </div>
          <h3 className="text-xl font-black text-gray-800 group-hover:text-primary transition-colors mb-2 tracking-tight">
            Registro Rápido por QR
          </h3>
          <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
            Escanea el código QR de un estudiante con la pistola lectora USB
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-primary/[0.06] px-5 py-2.5 rounded-full group-hover:bg-primary/[0.12] transition-colors">
            Ir al registro
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        {/* Últimos registros */}
        <div className="card p-7">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black text-gray-800 flex items-center gap-2.5 tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity size={16} className="text-primary" />
              </div>
              Últimos Registros
            </h3>
            <Link href="/dashboard/registro" className="text-xs font-bold text-primary hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="space-y-1">
            {ultimos.map((reg) => (
              <div
                key={reg.id}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-xs font-black text-primary border border-primary/[0.06]">
                    {reg.nombreEstudiante
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {reg.nombreEstudiante}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {reg.cursoEstudiante}
                    </p>
                  </div>
                </div>
                <span className="badge bg-success/10 text-success text-xs font-bold px-3 py-1.5">
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
