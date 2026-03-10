import LogoColegio from "@/components/LogoColegio";
import Link from "next/link";

export default function PaginaPrincipal() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabecera */}
      <header style={{ backgroundColor: "var(--color-primary)" }} className="text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg p-1">
              <LogoColegio variante="chico" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Colegio San Agustín</h1>
              <p className="text-sm text-blue-200">
                Sistema de Control de Comedores
              </p>
            </div>
          </div>
          <nav className="flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-colors text-sm"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Panel de Control
            </Link>
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <LogoColegio variante="grande" />
          </div>
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            Sistema de Control de Comedores
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Gestión integral del servicio de alimentación para estudiantes del
            Colegio San Agustín de Concepción. Control de almuerzos, registro de
            consumo y administración de menús.
          </p>

          {/* Tarjetas de funcionalidades */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Registro de Estudiantes
              </h3>
              <p className="text-gray-500 text-sm">
                Gestión de estudiantes con tarjetas QR únicas para identificación
                rápida en el comedor.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Control de Almuerzos
              </h3>
              <p className="text-gray-500 text-sm">
                Registro diario de consumo de almuerzos mediante lectura de
                códigos QR. Sin necesidad de celulares.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[var(--color-success)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Reportes y Estadísticas
              </h3>
              <p className="text-gray-500 text-sm">
                Informes detallados de consumo diario, semanal y mensual para la
                administración del colegio.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="text-white text-center py-6 text-sm" style={{ backgroundColor: "var(--color-primary-dark)" }}>
        <p className="font-medium">
          Colegio San Agustín Concepción
        </p>
        <p className="text-blue-200 text-xs mt-1">
          Sistema de Control de Comedores — © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
