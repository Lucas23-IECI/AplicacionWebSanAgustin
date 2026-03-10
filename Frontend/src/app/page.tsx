import Link from "next/link";
import {
  Users,
  QrCode,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Utensils,
  ClipboardCheck,
  PieChart,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import LogoColegio from "@/components/LogoColegio";

const funcionalidades = [
  {
    icono: Users,
    titulo: "Registro de Estudiantes",
    descripcion:
      "Gestión completa de estudiantes con tarjetas QR únicas para identificación rápida en el comedor.",
    color: "from-primary to-primary-light",
    accentColor: "text-primary",
    bgLight: "bg-primary/8",
  },
  {
    icono: QrCode,
    titulo: "Control de Almuerzos",
    descripcion:
      "Registro diario de consumo mediante lectura de códigos QR con pistola USB. Sin celulares.",
    color: "from-accent to-accent-light",
    accentColor: "text-accent",
    bgLight: "bg-accent/8",
  },
  {
    icono: BarChart3,
    titulo: "Reportes y Estadísticas",
    descripcion:
      "Informes detallados de consumo diario, semanal y mensual para la administración.",
    color: "from-success to-emerald-400",
    accentColor: "text-success",
    bgLight: "bg-success/8",
  },
];

const pasos = [
  {
    numero: "01",
    icono: ClipboardCheck,
    titulo: "Registrar estudiantes",
    desc: "Cargue la lista de estudiantes y genere tarjetas QR individuales para cada uno.",
    color: "from-primary to-primary-light",
  },
  {
    numero: "02",
    icono: QrCode,
    titulo: "Escanear en comedor",
    desc: "Use la pistola lectora USB para registrar cada almuerzo al instante.",
    color: "from-accent to-accent-light",
  },
  {
    numero: "03",
    icono: PieChart,
    titulo: "Consultar reportes",
    desc: "Visualice estadísticas diarias, semanales y por curso en tiempo real.",
    color: "from-purple to-purple-light",
  },
];

const beneficios = [
  "Sin conexión a internet requerida",
  "Registro en menos de 1 segundo",
  "Exportación de reportes a Excel",
  "Soporte para múltiples cursos",
];

export default function PaginaPrincipal() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ═══════════ CABECERA ═══════════ */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-xl text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-[4.5rem]">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-xl p-1.5 shadow-lg shadow-primary/30">
              <LogoColegio variante="chico" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold leading-tight tracking-tight">
                Colegio San Agustín
              </h1>
              <p className="text-[11px] text-white/40 font-medium">
                Concepción
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/dashboard"
              className="btn btn-accent text-sm shadow-lg shadow-accent/30"
            >
              <Zap size={16} />
              Panel de Control
            </Link>
          </nav>
        </div>
      </header>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        {/* Decoraciones de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-120px] left-[-80px] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] animate-float" />
          <div className="absolute bottom-[-150px] right-[-100px] w-[700px] h-[700px] bg-purple/20 rounded-full blur-[160px]" />
          <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Texto hero */}
            <div className="flex-1 text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 glass text-white text-xs font-semibold px-5 py-2.5 rounded-full mb-8 shadow-lg">
                <ShieldCheck size={14} className="text-accent" />
                <span>Plataforma institucional segura</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.08] mb-6 tracking-tight">
                Sistema de Control{" "}
                <span className="block mt-1 gradient-text">de Comedores</span>
              </h2>

              <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
                Gestión integral del servicio de alimentación para estudiantes
                del Colegio San Agustín de Concepción. Control, registro y
                reportes en tiempo real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/dashboard"
                  className="btn btn-accent text-base px-8 py-4 shadow-xl shadow-accent/30 hover:shadow-accent/50 text-base font-bold glow-accent"
                >
                  Ir al Panel
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/login"
                  className="btn glass text-white hover:bg-white/20 text-base px-8 py-4 font-semibold"
                >
                  Iniciar Sesión
                </Link>
              </div>

              {/* Stats inline */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-14 pt-8 border-t border-white/10">
                {[
                  { num: "500+", label: "Estudiantes" },
                  { num: "98%", label: "Precisión" },
                  { num: "< 1s", label: "Por escaneo" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-3xl font-black text-white tracking-tight">
                      {stat.num}
                    </p>
                    <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo + decoración */}
            <div className="flex-shrink-0 animate-scale-in hidden md:block">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-accent/25 via-purple/15 to-accent/10 rounded-[2rem] blur-2xl animate-pulse-soft" />
                <div className="relative glass rounded-[2rem] p-10 sm:p-12 shadow-2xl">
                  <LogoColegio variante="grande" />
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2.5 bg-accent/15 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20">
                      <Utensils className="text-accent" size={16} />
                      <p className="text-white/80 text-sm font-bold tracking-tight">
                        Control de Comedores
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-20 sm:h-28">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full"
          >
            <path
              d="M0 100V50C240 10 480 70 720 45C960 20 1200 60 1440 35V100H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════ FUNCIONALIDADES ═══════════ */}
      <section className="bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="text-center mb-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Sparkles size={14} />
              Funcionalidades
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              Todo lo que necesitas
            </h3>
            <p className="text-gray-500 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
              Herramientas diseñadas para la gestión eficiente del comedor
              escolar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {funcionalidades.map((f, i) => {
              const Icono = f.icono;
              return (
                <div
                  key={f.titulo}
                  className="feature-card group"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Icono con gradiente */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-400`}
                  >
                    <Icono size={26} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                    {f.titulo}
                  </h4>
                  <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                    {f.descripcion}
                  </p>
                  {/* Decoración esquina */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 ${f.bgLight} rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CÓMO FUNCIONA ═══════════ */}
      <section className="bg-white relative overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <Zap size={14} />
              Proceso
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              ¿Cómo funciona?
            </h3>
            <p className="text-gray-500 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
              Tres pasos simples para controlar el comedor escolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Línea conectora */}
            <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-primary/20 via-accent/30 to-purple/20 rounded-full" />
            </div>

            {pasos.map((paso) => {
              const Icono = paso.icono;
              return (
                <div
                  key={paso.numero}
                  className="relative text-center group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${paso.color} text-white mb-6 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative z-10`}
                  >
                    <Icono size={30} />
                  </div>
                  <div className="text-xs font-black text-gray-300 uppercase tracking-widest mb-2">
                    Paso {paso.numero}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                    {paso.titulo}
                  </h4>
                  <p className="text-gray-500 leading-relaxed max-w-xs mx-auto text-[0.95rem]">
                    {paso.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ BENEFICIOS ═══════════ */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Lado izquierdo - gradiente */}
              <div className="bg-gradient-to-br from-primary via-primary-light to-primary p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px]" />
                <div className="relative">
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                    ¿Por qué elegirnos?
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    Un sistema diseñado específicamente para las necesidades del
                    comedor escolar chileno.
                  </p>
                  <div className="space-y-4">
                    {beneficios.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                          <CheckCircle2
                            size={14}
                            className="text-accent"
                          />
                        </div>
                        <span className="text-white/80 text-sm font-medium">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Lado derecho - logo */}
              <div className="p-10 sm:p-14 flex flex-col items-center justify-center bg-gray-50/50">
                <LogoColegio variante="grande" />
                <p className="text-gray-400 text-sm mt-6 font-medium text-center">
                  Colegio San Agustín Concepción
                </p>
                <Link
                  href="/dashboard"
                  className="btn btn-primary mt-8 px-8 py-3.5 shadow-lg shadow-primary/20"
                >
                  Explorar el Sistema
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-60px] right-[-60px] w-[500px] h-[500px] bg-accent/12 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] bg-purple/15 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 py-20 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 glass text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <Sparkles size={14} className="text-accent" />
            Comienza ahora
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
            ¿Listo para modernizar{" "}
            <span className="gradient-text">tu comedor?</span>
          </h3>
          <p className="text-white/50 mb-10 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
            Accede al panel de control para gestionar el comedor de manera
            eficiente y profesional.
          </p>
          <Link
            href="/dashboard"
            className="btn btn-accent text-lg px-10 py-4 shadow-xl shadow-accent/30 glow-accent font-bold"
          >
            Acceder al Sistema
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-primary-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-1.5 shadow-md">
                <LogoColegio variante="navbar" />
              </div>
              <div>
                <p className="font-bold text-white text-sm tracking-tight">
                  Colegio San Agustín Concepción
                </p>
                <p className="text-white/30 text-xs">
                  Sistema de Control de Comedores
                </p>
              </div>
            </div>
            <p className="text-white/25 text-sm">
              © {new Date().getFullYear()} — Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
