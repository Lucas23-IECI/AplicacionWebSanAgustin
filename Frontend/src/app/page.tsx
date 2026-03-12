"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  QrCode,
  BarChart3,
  ScanLine,
  Monitor,
  ChevronRight,
  Database,
  Printer,
  UtensilsCrossed,
  UserCheck,
} from "lucide-react";
import LogoColegio from "@/components/LogoColegio";
import { MODO_PRESENTACION } from "@/lib/modoPresentacion";

const heroImages = [
  "/Imagenes/Colegio/FotoColegio1.jpeg",
  "/Imagenes/Colegio/FotoColegio3.jpeg",
];

const funcionalidades = [
  {
    icono: Users,
    titulo: "Registro de Estudiantes",
    descripcion:
      "Gestión completa de estudiantes con tarjetas QR únicas para identificación rápida en el comedor.",
    color: "from-primary to-primary-light",
  },
  {
    icono: QrCode,
    titulo: "Control de Almuerzos",
    descripcion:
      "Registro diario de consumo mediante lectura de códigos QR con pistola USB. Rápido y sin errores.",
    color: "from-accent to-accent-light",
  },
  {
    icono: BarChart3,
    titulo: "Reportes y Estadísticas",
    descripcion:
      "Informes detallados de consumo diario, semanal y mensual para la administración del colegio.",
    color: "from-success to-emerald-400",
  },
];

const flujo = [
  {
    icono: Database,
    titulo: "Base de datos",
    desc: "Los estudiantes están cargados en el sistema con sus datos",
    color: "from-primary to-primary-light",
  },
  {
    icono: QrCode,
    titulo: "Generación de QR",
    desc: "Cada estudiante tiene un código QR único vinculado a su perfil",
    color: "from-accent to-accent-light",
  },
  {
    icono: Printer,
    titulo: "Impresión de tarjetas",
    desc: "Las tarjetas se imprimen y entregan a cada alumno",
    color: "from-success to-emerald-400",
  },
  {
    icono: UtensilsCrossed,
    titulo: "Menú del día",
    desc: "La administración configura el menú del día en el sistema",
    color: "from-purple to-purple-light",
  },
  {
    icono: UserCheck,
    titulo: "Llegada al comedor",
    desc: "El alumno presenta su tarjeta al personal del comedor",
    color: "from-primary to-primary-light",
  },
  {
    icono: ScanLine,
    titulo: "Escaneo QR",
    desc: "El personal escanea la tarjeta con el lector USB",
    color: "from-accent to-accent-light",
  },
  {
    icono: Monitor,
    titulo: "Confirmación",
    desc: "El sistema muestra los datos del alumno y confirma el registro",
    color: "from-success to-emerald-400",
  },
  {
    icono: BarChart3,
    titulo: "Reportes",
    desc: "La administración consulta estadísticas en tiempo real",
    color: "from-purple to-purple-light",
  },
];

export default function PaginaPrincipal() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ═══════════ CABECERA ═══════════ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-[4.5rem]">
          <div className="flex items-center gap-3">
            <div className="rounded-xl p-1">
              <LogoColegio variante="chico" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold leading-tight tracking-tight text-gray-900">
                Colegio San Agustín
              </h1>
              <p className="text-[11px] text-gray-400 font-medium">
                Concepción
              </p>
            </div>
          </div>
          {!MODO_PRESENTACION && <div className="w-24" />}
        </div>
      </header>

      {/* ═══════════ HERO CON CARRUSEL DE FOTOS ═══════════ */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Carrusel de imágenes de fondo */}
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Colegio San Agustín de Concepción"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
            sizes="100vw"
          />
        ))}

        {/* Capa oscura fija — garantiza contraste incluso durante transición */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Overlay gradiente adicional */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="flex flex-col items-center justify-center text-center animate-slide-up">
            {/* Logo */}
            <div className="mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <LogoColegio variante="grande" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
              Sistema de Control{" "}
              <span className="text-accent">de Comedores</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
              Digitalización del servicio de alimentación estudiantil del
              Colegio San Agustín de Concepción. Control de asistencia,
              registro por código QR y reportes para la administración.
            </p>

            {!MODO_PRESENTACION && (
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              </div>
            )}
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentImage
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══════════ FUNCIONALIDADES ═══════════ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center mb-14">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              ¿Qué ofrece este sistema?
            </h3>
            <p className="text-gray-500 max-w-lg text-base sm:text-lg leading-relaxed">
              Una solución pensada para simplificar el control del comedor
              escolar, adaptada a la realidad del colegio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {funcionalidades.map((f) => {
              const Icono = f.icono;
              return (
                <div key={f.titulo} className="feature-card group">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icono size={26} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                    {f.titulo}
                  </h4>
                  <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                    {f.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ BANNER ALUMNOS 1 ═══════════ */}
      <section className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/Imagenes/Alumnos/FotoAlumnos1.jpeg"
          alt="Estudiantes del Colegio San Agustín"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
            <div className="max-w-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">
                Pensado para nuestros estudiantes
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Un sistema que cuida a cada alumno, asegurando que todos
                reciban su alimentación de forma ordenada y registrada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FLUJO OPERATIVO VISUAL ═══════════ */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center mb-14">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              ¿Cómo funciona?
            </h3>
            <p className="text-gray-500 max-w-2xl text-base sm:text-lg leading-relaxed">
              Desde la carga de estudiantes hasta los reportes finales, así es el
              proceso completo del sistema de control de comedores.
            </p>
          </div>

          {/* Flujo completo */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 lg:gap-y-12 relative">

            {flujo.map((paso, i) => {
              const Icono = paso.icono;
              return (
                <div
                  key={paso.titulo}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative mb-5">
                    <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 z-20">
                      {i + 1}
                    </div>
                    <div
                      className={`w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${paso.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all duration-300 relative z-10`}
                    >
                      <Icono size={28} />
                    </div>
                  </div>
                  {i < flujo.length - 1 && i !== 3 && (
                    <div className="hidden lg:block absolute top-[2.8rem] right-[-1rem] z-20">
                      <ChevronRight size={20} className="text-gray-300" />
                    </div>
                  )}
                  <h4 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
                    {paso.titulo}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                    {paso.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ BANNER ALUMNOS 2 + FOTO COLEGIO ═══════════ */}
      {!MODO_PRESENTACION && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/Imagenes/Alumnos/FotoAlumnos2.jpeg"
                  alt="Estudiantes del Colegio San Agustín"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5 tracking-tight">
                  Digitalización del comedor escolar
                </h3>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
                  Actualmente el control de almuerzos se realiza de forma manual.
                  Este sistema permite automatizar el registro con el lector QR
                  que ya posee el colegio, eliminando errores y ahorrando tiempo
                  al personal.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ ACCESO AL SISTEMA ═══════════ */}
      {!MODO_PRESENTACION && (
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden" />
          </div>
        </section>
      )}

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl p-1">
                <LogoColegio variante="navbar" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm tracking-tight">
                  Colegio San Agustín de Concepción
                </p>
                <p className="text-gray-400 text-xs">
                  Sistema de Control de Comedores
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} — Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
