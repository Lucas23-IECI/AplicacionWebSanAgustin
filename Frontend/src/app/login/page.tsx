import LogoColegio from "@/components/LogoColegio";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-purple) 100%)" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <LogoColegio variante="grande" />
          <h1 className="text-xl font-bold text-gray-800 mt-4">
            Sistema de Control de Comedores
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Colegio San Agustín Concepción
          </p>
        </div>

        {/* Formulario */}
        <form
          action="/dashboard"
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="usuario@csac.cl"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              defaultValue="admin@csac.cl"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              defaultValue="12345678"
            />
          </div>

          <Link
            href="/dashboard"
            className="block w-full text-center py-3 rounded-lg text-white font-semibold transition-colors"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Iniciar Sesión
          </Link>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          Acceso exclusivo para personal autorizado del colegio
        </p>
      </div>
    </div>
  );
}
