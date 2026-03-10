import {
  estudiantes,
  registrosHoy,
  resumenSemanal,
  obtenerCursos,
  obtenerResumenDia,
} from "@/lib/datosEjemplo";

export default function ReportesPage() {
  const resumen = obtenerResumenDia();
  const cursos = obtenerCursos();

  // Calcular consumo por curso
  const consumoPorCurso = cursos.map((curso) => {
    const estudiantesCurso = estudiantes.filter((e) => e.curso === curso.nombre);
    const almorzaronCurso = estudiantesCurso.filter((e) =>
      registrosHoy.some((r) => r.estudianteId === e.id)
    ).length;
    const porcentajeCurso = curso.cantidadEstudiantes > 0
      ? Math.round((almorzaronCurso / curso.cantidadEstudiantes) * 100)
      : 0;
    return {
      ...curso,
      almorzaron: almorzaronCurso,
      porcentaje: porcentajeCurso,
    };
  });

  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Reportes y Estadísticas</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
          📊 Exportar a Excel
        </button>
      </div>

      {/* Resumen del día actual */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">📅 Resumen de Hoy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
              {resumen.totalEstudiantes}
            </p>
            <p className="text-sm text-gray-500">Total</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">{resumen.almorzaron}</p>
            <p className="text-sm text-gray-500">Almorzaron</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-600">{resumen.pendientes}</p>
            <p className="text-sm text-gray-500">Pendientes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: "var(--color-accent)" }}>
              {resumen.porcentaje}%
            </p>
            <p className="text-sm text-gray-500">Consumo</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resumen semanal */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">📈 Resumen Semanal</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-2 px-3 font-semibold text-gray-600">Día</th>
                <th className="text-center py-2 px-3 font-semibold text-gray-600">Almorzaron</th>
                <th className="text-center py-2 px-3 font-semibold text-gray-600">Total</th>
                <th className="text-center py-2 px-3 font-semibold text-gray-600">%</th>
              </tr>
            </thead>
            <tbody>
              {resumenSemanal.map((dia, i) => (
                <tr key={dia.fecha} className="border-b border-gray-100">
                  <td className="py-2 px-3 text-gray-700">{diasSemana[i] ?? dia.fecha}</td>
                  <td className="py-2 px-3 text-center font-medium text-green-600">
                    {dia.almorzaron}
                  </td>
                  <td className="py-2 px-3 text-center text-gray-600">{dia.totalEstudiantes}</td>
                  <td className="py-2 px-3 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                        dia.porcentaje >= 80
                          ? "bg-green-100 text-green-700"
                          : dia.porcentaje >= 60
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {dia.porcentaje}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Gráfico de barras CSS */}
          <div className="mt-6">
            <p className="text-xs text-gray-500 mb-3 font-semibold">Consumo diario (visual)</p>
            <div className="flex items-end gap-2 h-32">
              {resumenSemanal.map((dia, i) => (
                <div key={dia.fecha} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full rounded-t-md transition-all"
                    style={{
                      height: `${dia.porcentaje}%`,
                      backgroundColor:
                        dia.porcentaje >= 80
                          ? "var(--color-success)"
                          : dia.porcentaje >= 60
                            ? "var(--color-accent)"
                            : "var(--color-warning)",
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-1">{diasSemana[i]?.slice(0, 3)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consumo por curso */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">🎓 Consumo por Curso</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-2 px-3 font-semibold text-gray-600">Curso</th>
                <th className="text-center py-2 px-3 font-semibold text-gray-600">Total</th>
                <th className="text-center py-2 px-3 font-semibold text-gray-600">Almorzaron</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-600">Progreso</th>
              </tr>
            </thead>
            <tbody>
              {consumoPorCurso.map((curso) => (
                <tr key={curso.nombre} className="border-b border-gray-100">
                  <td className="py-2 px-3 text-gray-700 font-medium">{curso.nombre}</td>
                  <td className="py-2 px-3 text-center text-gray-600">{curso.cantidadEstudiantes}</td>
                  <td className="py-2 px-3 text-center text-green-600 font-medium">{curso.almorzaron}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${curso.porcentaje}%`,
                            backgroundColor:
                              curso.porcentaje >= 80
                                ? "var(--color-success)"
                                : curso.porcentaje >= 50
                                  ? "var(--color-accent)"
                                  : "var(--color-warning)",
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 min-w-[32px]">{curso.porcentaje}%</span>
                    </div>
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
