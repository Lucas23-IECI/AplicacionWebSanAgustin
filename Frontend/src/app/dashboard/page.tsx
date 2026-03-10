import TarjetaResumen from "@/components/TarjetaResumen";
import BarraProgreso from "@/components/BarraProgreso";
import { obtenerResumenDia, obtenerUltimosRegistros } from "@/lib/datosEjemplo";
import Link from "next/link";

export default function DashboardPage() {
  const resumen = obtenerResumenDia();
  const ultimos = obtenerUltimosRegistros(5);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Resumen del Día
      </h2>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <TarjetaResumen
          titulo="Almuerzos Hoy"
          valor={resumen.almorzaron}
          subtexto={`de ${resumen.totalEstudiantes} estudiantes`}
          icono={<span>🍽️</span>}
          colorValor="var(--color-primary)"
        />
        <TarjetaResumen
          titulo="Estudiantes Activos"
          valor={resumen.totalEstudiantes}
          subtexto="total en el sistema"
          icono={<span>👥</span>}
          colorValor="var(--color-success)"
        />
        <TarjetaResumen
          titulo="Pendientes"
          valor={resumen.pendientes}
          subtexto="sin registrar almuerzo"
          icono={<span>⏳</span>}
          colorValor="var(--color-warning)"
        />
        <TarjetaResumen
          titulo="Tasa de Consumo"
          valor={`${resumen.porcentaje}%`}
          subtexto="del día actual"
          icono={<span>📊</span>}
          colorValor="var(--color-accent)"
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
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-primary)] transition-all group"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-3 group-hover:text-[var(--color-primary)]">
            📷 Registro Rápido por QR
          </h3>
          <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 group-hover:border-[var(--color-primary)] group-hover:bg-blue-50 transition-all">
            <div className="text-center text-gray-400 group-hover:text-[var(--color-primary)]">
              <p className="text-3xl mb-1">📷</p>
              <p className="text-sm font-medium">
                Ir al registro de almuerzos
              </p>
            </div>
          </div>
        </Link>

        {/* Últimos registros */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Últimos Registros
          </h3>
          <div className="space-y-3">
            {ultimos.map((reg) => (
              <div
                key={reg.id}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {reg.nombreEstudiante}
                  </p>
                  <p className="text-xs text-gray-500">{reg.cursoEstudiante}</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
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
