import Link from "next/link";
import {
  Users,
  QrCode,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  UtensilsCrossed,
  ArrowRight,
  Utensils,
  ClipboardCheck,
  PieChart,
} from "lucide-react";
import LogoColegio from "@/components/LogoColegio";

const funcionalidades = [
  {
    icono: Users,
    titulo: "Registro de Estudiantes",
    descripcion:
      "Gestión de estudiantes con tarjetas QR únicas para identificación rápida en el comedor.",
    color: "bg-primary/10 text-primary",
    iconBg: "bg-primary",
  },
  {
    icono: QrCode,
    titulo: "Control de Almuerzos",
    descripcion:
      "Registro diario de consumo mediante lectura de códigos QR con pistola USB. Sin necesidad de celulares.",
    color: "bg-accent/10 text-accent",
    iconBg: "bg-accent",
  },
  {
    icono: BarChart3,
    titulo: "Reportes y Estadísticas",
    descripcion:
      "Informes detallados de consumo diario, semanal y mensual para la administración del colegio.",
    color: "bg-success/10 text-success",
    iconBg: "bg-success",
  },
];

const pasos = [
  {
    numero: "01",
    icono: ClipboardCheck,
    titulo: "Registrar estudiantes",
    desc: "Cargue la lista de estudiantes y genere tarjetas QR individuales.",
  },
  {
    numero: "02",
    icono: QrCode,
    titulo: "Escanear en comedor",
    desc: "Use la pistola lectora USB para registrar cada almuerzo al instante.",
  },
  {
    numero: "03",
    icono: PieChart,
    titulo: "Consultar reportes",
    desc: "Visualice estadísticas diarias, semanales y por curso en tiempo real.",
  },
];

export default function PaginaPrincipal() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Cabecera */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md text-white shadow-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <LogoColegio variante="chico" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold leading-tight">
                Colegio San Agustín
              </h1>
              <p className="text-[11px] text-white/50 font-medium">Concepción</p>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-white/80 hover:text-white transition-colors hidden sm:block">
              Iniciar Sesión
            </Link>
            <Link href="/dashboard" className="btn btn-accent text-sm shadow-lg shadow-accent/25">
              Panel de Control
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero — visual impactante */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-[-80px] left-[-60px] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-100px] right-[-80px] w-[600px] h-[600px] bg-purple/25 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]" />
          {/* Patrón geométrico sutil */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 md:py-32 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Texto hero */}
            <div className="flex-1 text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/20 shadow-lg">
                <ShieldCheck size={14} className="text-accent" />
                <span>Plataforma institucional segura</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Sistema de Control
                <br />
                <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  de Comedores
                </span>
              </h2>
              <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
                Gestión integral del servicio de alimentación para estudiantes
                del Colegio San Agustín de Concepción. Control de almuerzos,
                registro de consumo y reportes en tiempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/dashboard"
                  className="btn btn-accent text-base px-8 py-3.5 shadow-xl shadow-accent/30 hover:shadow-accent/50 inline-flex items-center gap-2 text-lg font-bold"
                >
                  Ir al Panel
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/login"
                  className="btn text-white border-2 border-white/30 hover:bg-white/15 hover:border-white/50 text-base px-8 py-3.5 backdrop-blur-sm"
                >
                  Iniciar Sesión
                </Link>
              </div>

              {/* Stats mini */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-white/10">
                {[
                  { num: "500+", label: "Estudiantes" },
                  { num: "98%", label: "Precisión" },
                  { num: "< 1s", label: "Por escaneo" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-white">{stat.num}</p>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo grande + decoración */}
            <div className="flex-shrink-0 animate-scale-in">
              <div className="relative">
                {/* Anillo decorativo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-purple/30 rounded-3xl blur-xl" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
                  <LogoColegio variante="grande" />
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Utensils className="text-accent" size={18} />
                      <p className="text-white/80 text-sm font-semibold">Control de Comedores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider mejorado */}
        <div className="relative h-24">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
            <path
              d="M0 120V60C360 0 720 80 1080 40C1260 20 1380 30 1440 40V120H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Funcionalidades</p>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-800 mb-4">
              Todo lo que necesitas
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              Herramientas diseñadas para la gestión eficiente del comedor
              escolar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funcionalidades.map((f, i) => {
              const Icono = f.icono;
              return (
                <div
                  key={f.titulo}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icono size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {f.titulo}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    {f.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Proceso</p>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-800 mb-4">
              ¿Cómo funciona?
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              Tres pasos simples para controlar el comedor escolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-success/20" />

            {pasos.map((paso, i) => {
              const Icono = paso.icono;
              return (
                <div key={paso.numero} className="relative text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-black mb-6 shadow-xl shadow-primary/25 group-hover:scale-110 transition-transform relative z-10">
                    {paso.numero}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {paso.titulo}
                  </h4>
                  <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                    {paso.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-50px] right-[-50px] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-purple/20 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 text-center">
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-white/60 mb-10 max-w-lg mx-auto text-lg">
            Accede al panel de control para gestionar el comedor de manera
            eficiente y profesional.
          </p>
          <Link
            href="/dashboard"
            className="btn btn-accent text-lg px-10 py-4 shadow-xl shadow-accent/30 inline-flex items-center gap-3 font-bold"
          >
            Acceder al Sistema
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1">
                <LogoColegio variante="navbar" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">
                  Colegio San Agustín Concepción
                </p>
                <p className="text-white/40 text-xs">Sistema de Control de Comedores</p>
              </div>
            </div>
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} — Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
