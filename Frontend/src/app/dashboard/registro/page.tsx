import LectorQR from "@/components/LectorQR";
import { obtenerUltimosRegistros, obtenerResumenDia } from "@/lib/datosEjemplo";

export default function RegistroPage() {
  const resumen = obtenerResumenDia();
  const ultimos = obtenerUltimosRegistros(8);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Registro de Almuerzos</h2>
        <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm border">
          📅 {new Date().toLocaleDateString("es-CL", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Zona de escaneo — ocupa 2 columnas */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            📷 Escanear Tarjeta QR
          </h3>
          <LectorQR />
        </div>

        {/* Resumen rápido */}
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Resumen del Día</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Almorzaron</span>
                <span className="text-lg font-bold text-green-600">{resumen.almorzaron}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pendientes</span>
                <span className="text-lg font-bold text-amber-600">{resumen.pendientes}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total</span>
                <span className="text-lg font-bold text-gray-700">{resumen.totalEstudiantes}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avance</span>
                  <span className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>
                    {resumen.porcentaje}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${resumen.porcentaje}%`,
                      backgroundColor: resumen.porcentaje >= 80 ? "var(--color-success)" : "var(--color-accent)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Códigos de ejemplo para demo */}
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <p className="text-xs font-semibold text-blue-700 mb-2">💡 Códigos de prueba:</p>
            <div className="grid grid-cols-2 gap-1">
              {["SA-PK-001", "SA-1B-001", "SA-5B-001", "SA-1M-001", "SA-4M-001", "SA-3B-002"].map((codigo) => (
                <code key={codigo} className="text-xs bg-white px-2 py-1 rounded text-blue-800 font-mono">
                  {codigo}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Últimos registros */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Últimos Registros de Hoy
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-2 px-4 font-semibold text-gray-600">Hora</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-600">Estudiante</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-600">Curso</th>
                <th className="text-left py-2 px-4 font-semibold text-gray-600">Registrado por</th>
              </tr>
            </thead>
            <tbody>
              {ultimos.map((reg) => (
                <tr key={reg.id} className="border-b border-gray-100">
                  <td className="py-2 px-4 text-gray-600">{reg.hora}</td>
                  <td className="py-2 px-4 font-medium text-gray-800">{reg.nombreEstudiante}</td>
                  <td className="py-2 px-4 text-gray-600">{reg.cursoEstudiante}</td>
                  <td className="py-2 px-4 text-gray-500">{reg.registradoPor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
