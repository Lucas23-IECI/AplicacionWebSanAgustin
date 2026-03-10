export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Resumen del Día
      </h2>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Almuerzos Hoy</p>
          <p className="text-3xl font-bold text-[var(--color-primary)]">0</p>
          <p className="text-xs text-gray-400 mt-1">de 0 registrados</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Estudiantes Activos</p>
          <p className="text-3xl font-bold text-[var(--color-success)]">0</p>
          <p className="text-xs text-gray-400 mt-1">total en el sistema</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Pendientes</p>
          <p className="text-3xl font-bold text-[var(--color-warning)]">0</p>
          <p className="text-xs text-gray-400 mt-1">sin registrar almuerzo</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Tasa de Consumo</p>
          <p className="text-3xl font-bold text-[var(--color-accent)]">0%</p>
          <p className="text-xs text-gray-400 mt-1">promedio semanal</p>
        </div>
      </div>

      {/* Área de registro rápido */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Registro Rápido por QR
        </h3>
        <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
          <div className="text-center text-gray-400">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
            <p className="text-sm">
              Zona de lectura QR — Conectar lector de códigos
            </p>
            <p className="text-xs mt-1">
              El sistema registrará automáticamente el almuerzo del estudiante
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
