import Link from "next/link";
import { Lock, Mail, ShieldCheck, ArrowLeft, Eye } from "lucide-react";
import LogoColegio from "@/components/LogoColegio";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden flex-col items-center justify-center p-12">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/20 rounded-full blur-[140px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 text-center animate-fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/25 to-purple/25 rounded-3xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
              <LogoColegio variante="grande" />
            </div>
          </div>
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            Colegio San Agustín
          </h2>
          <p className="text-white/60 max-w-sm text-lg leading-relaxed">
            Sistema de Control de Comedores — Gestión integral del servicio de
            alimentación estudiantil
          </p>
          <div className="flex items-center justify-center gap-2 mt-10 text-white/40 text-xs font-medium">
            <ShieldCheck size={14} className="text-accent" />
            <span>Plataforma institucional segura</span>
          </div>
        </div>
      </div>

      {/* Panel derecho — formulario */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-16 bg-gray-50">
        <div className="w-full max-w-md animate-slide-up">
          {/* Link volver */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-primary text-sm mb-10 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="bg-primary/5 rounded-2xl p-6">
              <LogoColegio variante="grande" />
            </div>
          </div>

          <h1 className="text-3xl font-black text-gray-800 mb-2">
            Iniciar Sesión
          </h1>
          <p className="text-gray-400 mb-10">
            Ingresa tus credenciales para acceder al sistema
          </p>

          {/* Formulario */}
          <form action="/dashboard" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
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
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
                  defaultValue="admin@csac.cl"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
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
                  className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
                  defaultValue="12345678"
                />
                <Eye
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer hover:text-gray-500 transition-colors"
                />
              </div>
            </div>

            <Link
              href="/dashboard"
              className="btn btn-primary w-full justify-center py-3.5 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 font-bold"
            >
              Iniciar Sesión
            </Link>
          </form>

          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-xs text-primary/60 text-center font-medium">
              🔒 Acceso exclusivo para personal autorizado del colegio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
