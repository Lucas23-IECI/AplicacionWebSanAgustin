import Link from "next/link";
import {
  Users,
  QrCode,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  UtensilsCrossed,
} from "lucide-react";
import LogoColegio from "@/components/LogoColegio";

const funcionalidades = [
  {
    icono: Users,
    titulo: "Registro de Estudiantes",
    descripcion:
      "Gestión de estudiantes con tarjetas QR únicas para identificación rápida en el comedor.",
    color: "bg-primary/10 text-primary",
  },
  {
    icono: QrCode,
    titulo: "Control de Almuerzos",
    descripcion:
      "Registro diario de consumo mediante lectura de códigos QR con pistola USB. Sin necesidad de celulares.",
    color: "bg-accent/10 text-accent",
  },
  {
    icono: BarChart3,
    titulo: "Reportes y Estadísticas",
    descripcion:
      "Informes detallados de consumo diario, semanal y mensual para la administración del colegio.",
    color: "bg-success/10 text-success",
  },
];

export default function PaginaPrincipal() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabecera */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1">
              <LogoColegio variante="chico" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold leading-tight">
                Colegio San Agustín
              </h1>
              <p className="text-[11px] text-white/60">Concepción</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Link href="/login" className="btn btn-outline text-white border-white/30 hover:bg-white/10 text-sm">
              Iniciar Sesión
            </Link>
            <Link href="/dashboard" className="btn btn-accent text-sm hidden sm:inline-flex">
              Panel de Control
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Texto hero */}
            <div className="flex-1 text-center md:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <ShieldCheck size={14} />
                <span>Plataforma institucional segura</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Sistema de Control
                <br />
                <span className="text-accent">de Comedores</span>
              </h2>
              <p className="text-white/70 text-lg max-w-lg mb-8">
                Gestión integral del servicio de alimentación para estudiantes
                del Colegio San Agustín de Concepción. Control de almuerzos,
                registro de consumo y reportes en tiempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/dashboard"
                  className="btn btn-accent text-base px-6 py-3 inline-flex items-center gap-2"
                >
                  Ir al Panel
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/login"
                  className="btn btn-outline text-white border-white/30 hover:bg-white/10 text-base px-6 py-3"
                >
                  Iniciar Sesión
                </Link>
              </div>
            </div>

            {/* Logo grande */}
            <div className="flex-shrink-0 animate-scale-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <LogoColegio variante="grande" />
                <div className="mt-4 text-center">
                  <UtensilsCrossed className="mx-auto text-accent mb-1" size={24} />
                  <p className="text-white/50 text-xs">Control de Comedores</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              fill="var(--color-gray-50)"
            />
          </svg>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Todo lo que necesitas
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Herramientas diseñadas para la gestión eficiente del comedor
            escolar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {funcionalidades.map((f, i) => {
            const Icono = f.icono;
            return (
              <div
                key={f.titulo}
                className="card p-6 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icono size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {f.titulo}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            ¿Listo para comenzar?
          </h3>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Accede al panel de control para gestionar el comedor de manera
            eficiente.
          </p>
          <Link
            href="/dashboard"
            className="btn btn-accent text-base px-8 py-3 inline-flex items-center gap-2"
          >
            Acceder al Sistema
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white/60 text-center py-6 text-sm">
        <p className="font-medium text-white/80">
          Colegio San Agustín Concepción
        </p>
        <p className="text-xs mt-1">
          Sistema de Control de Comedores — © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
