import {
  estudiantes,
  registrosHoy,
  resumenSemanal,
  obtenerCursos,
  obtenerResumenDia,
} from "@/lib/datosEjemplo";
import {
  Download,
  Calendar,
  Users,
  UtensilsCrossed,
  Clock,
  TrendingUp,
  GraduationCap,
  BarChart3,
} from "lucide-react";

export default function ReportesPage() {
  const resumen = obtenerResumenDia();
  const cursos = obtenerCursos();

  const consumoPorCurso = cursos.map((curso) => {
    const estudiantesCurso = estudiantes.filter(
      (e) => e.curso === curso.nombre
    );
    const almorzaronCurso = estudiantesCurso.filter((e) =>
      registrosHoy.some((r) => r.estudianteId === e.id)
    ).length;
    const porcentajeCurso =
      curso.cantidadEstudiantes > 0
        ? Math.round((almorzaronCurso / curso.cantidadEstudiantes) * 100)
        : 0;
    return {
      ...curso,
      almorzaron: almorzaronCurso,
      porcentaje: porcentajeCurso,
    };
  });

  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  const resumenItems = [
    {
      value: resumen.totalEstudiantes,
      label: "Total",
      icon: Users,
      color: "text-primary",
    },
    {
      value: resumen.almorzaron,
      label: "Almorzaron",
      icon: UtensilsCrossed,
      color: "text-success",
    },
    {
      value: resumen.pendientes,
      label: "Pendientes",
      icon: Clock,
      color: "text-warning",
    },
    {
      value: `${resumen.porcentaje}%`,
      label: "Consumo",
      icon: TrendingUp,
      color: "text-accent",
    },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">
          Reportes y Estadísticas
        </h2>
        <button className="btn btn-primary inline-flex items-center gap-2 text-sm">
          <Download size={16} />
          Exportar a Excel
        </button>
      </div>

      {/* Resumen del día */}
      <div className="card p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <Calendar size={18} className="text-primary" />
          Resumen de Hoy
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resumenItems.map((item) => {
            const Icono = item.icon;
            return (
              <div
                key={item.label}
                className="text-center p-3 rounded-xl bg-gray-50"
              >
                <Icono
                  size={20}
                  className={`mx-auto mb-2 ${item.color} opacity-60`}
                />
                <p className={`text-2xl font-bold ${item.color}`}>
                  {item.value}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resumen semanal */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <BarChart3 size={18} className="text-primary" />
            Resumen Semanal
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    Día
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    Almorzaron
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    Total
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                {resumenSemanal.map((dia, i) => (
                  <tr
                    key={dia.fecha}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-2.5 px-3 text-gray-700 font-medium">
                      {diasSemana[i] ?? dia.fecha}
                    </td>
                    <td className="py-2.5 px-3 text-center font-semibold text-success">
                      {dia.almorzaron}
                    </td>
                    <td className="py-2.5 px-3 text-center text-gray-500">
                      {dia.totalEstudiantes}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`badge text-xs ${
                          dia.porcentaje >= 80
                            ? "bg-success/10 text-success"
                            : dia.porcentaje >= 60
                              ? "bg-warning/10 text-warning"
                              : "bg-danger/10 text-danger"
                        }`}
                      >
                        {dia.porcentaje}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Gráfico de barras */}
          <div className="mt-6">
            <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">
              Consumo diario
            </p>
            <div className="flex items-end gap-3 h-32">
              {resumenSemanal.map((dia, i) => {
                const barColor =
                  dia.porcentaje >= 80
                    ? "from-success to-emerald-400"
                    : dia.porcentaje >= 60
                      ? "from-accent to-yellow-400"
                      : "from-warning to-orange-400";
                return (
                  <div
                    key={dia.fecha}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span className="text-[10px] text-gray-400 font-medium">
                      {dia.porcentaje}%
                    </span>
                    <div
                      className={`w-full rounded-t-lg bg-gradient-to-t ${barColor} transition-all duration-500`}
                      style={{ height: `${dia.porcentaje}%` }}
                    />
                    <span className="text-xs text-gray-500 font-medium">
                      {diasSemana[i]?.slice(0, 3)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Consumo por curso */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-primary" />
            Consumo por Curso
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    Curso
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    Total
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    Almorzaron
                  </th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                    Progreso
                  </th>
                </tr>
              </thead>
              <tbody>
                {consumoPorCurso.map((curso) => {
                  const barColor =
                    curso.porcentaje >= 80
                      ? "from-success to-emerald-400"
                      : curso.porcentaje >= 50
                        ? "from-accent to-yellow-400"
                        : "from-warning to-orange-400";
                  return (
                    <tr
                      key={curso.nombre}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-2.5 px-3 text-gray-700 font-medium">
                        {curso.nombre}
                      </td>
                      <td className="py-2.5 px-3 text-center text-gray-500">
                        {curso.cantidadEstudiantes}
                      </td>
                      <td className="py-2.5 px-3 text-center font-semibold text-success">
                        {curso.almorzaron}
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all duration-500`}
                              style={{ width: `${curso.porcentaje}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 min-w-[32px] text-right">
                            {curso.porcentaje}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
