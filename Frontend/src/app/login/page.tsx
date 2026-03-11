import Link from "next/link";
import { Lock, Mail, ShieldCheck, ArrowLeft, Eye } from "lucide-react";
import LogoColegio from "@/components/LogoColegio";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo — branding */}
      <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden flex-col items-center justify-center p-14">
        {/* Decoraciones */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/12 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple/15 rounded-full blur-[160px] translate-x-1/3 translate-y-1/3" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 text-center animate-fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute -inset-5 bg-gradient-to-br from-accent/20 via-purple/15 to-accent/10 rounded-[2rem] blur-2xl animate-pulse-soft" />
            <div className="relative glass rounded-[2rem] p-12 shadow-2xl">
              <LogoColegio variante="grande" />
            </div>
          </div>
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            Colegio San Agustín
          </h2>
          <p className="text-white/50 max-w-sm text-lg leading-relaxed">
            Sistema de Control de Comedores — Gestión integral del servicio de
            alimentación estudiantil
          </p>
          <div className="flex items-center justify-center gap-2.5 mt-10 glass px-5 py-2.5 rounded-full inline-flex">
            <ShieldCheck size={14} className="text-accent" />
            <span className="text-white/60 text-xs font-semibold">Plataforma institucional segura</span>
          </div>
        </div>
      </div>

      {/* Panel derecho — formulario */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-16 bg-gray-50 relative">
        {/* Decoración sutil */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.02] rounded-full blur-[80px]" />

        <div className="w-full max-w-md animate-slide-up relative">
          {/* Link volver */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm mb-12 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-10">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <LogoColegio variante="grande" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 tracking-tight">
            Iniciar Sesión
          </h1>
          <p className="text-gray-400 mb-10 text-base">
            Ingresa tus credenciales para acceder al sistema
          </p>

          {/* Formulario */}
          <form action="/dashboard" className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2.5"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="usuario@csac.cl"
                  className="input-modern"
                  defaultValue="admin@csac.cl"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2.5"
              >
                Contraseña
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="input-modern !pr-12"
                  defaultValue="12345678"
                />
                <Eye
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer hover:text-gray-500 transition-colors"
                />
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/dashboard"
                className="btn btn-primary w-full justify-center py-4 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 font-bold text-base"
              >
                Iniciar Sesión
              </Link>
            </div>
          </form>

          <div className="mt-10 p-5 rounded-2xl bg-primary/[0.04] border border-primary/[0.08]">
            <p className="text-xs text-primary/50 text-center font-semibold tracking-wide">
              🔒 Acceso exclusivo para personal autorizado del colegio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
