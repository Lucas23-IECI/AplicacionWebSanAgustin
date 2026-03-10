import Link from "next/link";
import { Lock, Mail, ShieldCheck, ArrowLeft } from "lucide-react";
import LogoColegio from "@/components/LogoColegio";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden flex-col items-center justify-center p-12">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block mb-8">
            <LogoColegio variante="grande" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Colegio San Agustín
          </h2>
          <p className="text-white/60 max-w-sm">
            Sistema de Control de Comedores — Gestión integral del servicio de
            alimentación estudiantil
          </p>
          <div className="flex items-center justify-center gap-2 mt-8 text-white/40 text-xs">
            <ShieldCheck size={14} />
            <span>Plataforma institucional segura</span>
          </div>
        </div>
      </div>

      {/* Panel derecho — formulario */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-gray-50">
        <div className="w-full max-w-md animate-slide-up">
          {/* Link volver */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-primary text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>

          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-6">
            <LogoColegio variante="grande" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Iniciar Sesión
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Ingresa tus credenciales para acceder al sistema
          </p>

          {/* Formulario */}
          <form action="/dashboard" className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="usuario@csac.cl"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  defaultValue="admin@csac.cl"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Contraseña
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  defaultValue="12345678"
                />
              </div>
            </div>

            <Link
              href="/dashboard"
              className="btn btn-primary w-full justify-center py-3 text-base"
            >
              Iniciar Sesión
            </Link>
          </form>

          <p className="text-xs text-gray-400 text-center mt-8">
            Acceso exclusivo para personal autorizado del colegio
          </p>
        </div>
      </div>
    </div>
  );
}
