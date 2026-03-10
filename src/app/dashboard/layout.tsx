export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Barra lateral */}
      <aside className="w-64 bg-[var(--color-primary)] text-white p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center font-bold">
            SA
          </div>
          <div>
            <p className="font-bold text-sm">San Agustín</p>
            <p className="text-xs text-blue-200">Comedores</p>
          </div>
        </div>

        <nav className="space-y-2">
          <a
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[var(--color-primary-light)] text-white"
          >
            <span>📊</span>
            <span>Resumen</span>
          </a>
          <a
            href="/dashboard/estudiantes"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
          >
            <span>👥</span>
            <span>Estudiantes</span>
          </a>
          <a
            href="/dashboard/registro"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
          >
            <span>📋</span>
            <span>Registro Diario</span>
          </a>
          <a
            href="/dashboard/reportes"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
          >
            <span>📈</span>
            <span>Reportes</span>
          </a>
        </nav>
      </aside>

      {/* Contenido */}
      <div className="flex-1 bg-gray-50">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-700">
            Panel de Control
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Administrador</span>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
