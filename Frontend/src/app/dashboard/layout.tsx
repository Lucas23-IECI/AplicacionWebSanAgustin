"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  QrCode,
  Users,
  BarChart3,
  Calendar,
  Menu,
  X,
  LogOut,
  Bell,
} from "lucide-react";
import LogoColegio from "@/components/LogoColegio";

const enlacesNav = [
  { href: "/dashboard", etiqueta: "Resumen", icono: LayoutDashboard },
  { href: "/dashboard/registro", etiqueta: "Registro", icono: QrCode },
  { href: "/dashboard/estudiantes", etiqueta: "Estudiantes", icono: Users },
  { href: "/dashboard/reportes", etiqueta: "Reportes", icono: BarChart3 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ruta = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const fechaHoy = new Date().toLocaleDateString("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <header className="sticky top-0 z-50 glass-dark shadow-2xl animate-slide-down">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[4.25rem]">
            {/* Logo + Nombre */}
            <Link href="/dashboard" className="flex items-center gap-3 shrink-0 group">
              <div className="bg-white rounded-xl p-1.5 shadow-lg shadow-primary/30 group-hover:shadow-xl transition-shadow">
                <LogoColegio variante="sidebar" />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-white text-sm leading-tight tracking-tight">
                  San Agustín
                </p>
                <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider">
                  Comedores
                </p>
              </div>
            </Link>

            {/* Nav central — desktop */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.06] rounded-2xl p-1.5 border border-white/[0.06]">
              {enlacesNav.map((enlace) => {
                const activo = ruta === enlace.href;
                const Icono = enlace.icono;
                return (
                  <Link
                    key={enlace.href}
                    href={enlace.href}
                    className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-250 ${
                      activo
                        ? "text-white bg-white/[0.14] shadow-sm shadow-white/5"
                        : "text-white/50 hover:text-white/90 hover:bg-white/[0.07]"
                    }`}
                  >
                    <Icono size={17} strokeWidth={activo ? 2.5 : 2} />
                    <span className="font-semibold">{enlace.etiqueta}</span>
                    {activo && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-gradient-to-r from-accent to-accent-light rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Derecha: fecha + notificación + avatar + logout */}
            <div className="hidden md:flex items-center gap-2.5">
              <div className="flex items-center gap-2 text-white/35 text-xs bg-white/[0.05] px-3.5 py-2 rounded-xl border border-white/[0.06]">
                <Calendar size={13} />
                <span className="capitalize font-medium">{fechaHoy}</span>
              </div>
              <div className="h-5 w-px bg-white/10" />
              <button className="relative text-white/40 hover:text-white transition-colors p-2 hover:bg-white/[0.08] rounded-xl">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-gradient-to-br from-accent to-accent-light rounded-full border-2 border-primary" />
              </button>
              <div className="flex items-center gap-2.5 bg-white/[0.08] rounded-2xl px-3.5 py-2 border border-white/[0.06]">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-primary font-black text-xs shadow-lg shadow-accent/20">
                  AD
                </div>
                <div className="hidden lg:block">
                  <p className="text-white text-xs font-bold tracking-tight">Admin</p>
                  <p className="text-white/30 text-[10px] font-medium">Administrador</p>
                </div>
              </div>
              <Link
                href="/"
                className="text-white/30 hover:text-white/80 transition-colors p-2 hover:bg-white/[0.08] rounded-xl"
                title="Cerrar sesión"
              >
                <LogOut size={17} />
              </Link>
            </div>

            {/* Hamburguesa — mobile */}
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="md:hidden text-white p-2.5 hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Menú"
            >
              {menuAbierto ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuAbierto && (
          <div className="md:hidden border-t border-white/[0.06] bg-primary-dark/95 backdrop-blur-xl animate-slide-down">
            <div className="px-5 py-4 space-y-1">
              {enlacesNav.map((enlace) => {
                const activo = ruta === enlace.href;
                const Icono = enlace.icono;
                return (
                  <Link
                    key={enlace.href}
                    href={enlace.href}
                    onClick={() => setMenuAbierto(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm transition-all ${
                      activo
                        ? "bg-white/[0.12] text-white font-bold"
                        : "text-white/50 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <Icono size={18} />
                    <span>{enlace.etiqueta}</span>
                    {activo && (
                      <span className="ml-auto w-2.5 h-2.5 rounded-full bg-gradient-to-br from-accent to-accent-light" />
                    )}
                  </Link>
                );
              })}
              <div className="border-t border-white/[0.06] pt-3 mt-3">
                <div className="flex items-center gap-2 px-4 py-2 text-white/30 text-xs">
                  <Calendar size={14} />
                  <span className="capitalize">{fechaHoy}</span>
                </div>
                <Link
                  href="/"
                  onClick={() => setMenuAbierto(false)}
                  className="flex items-center gap-3 px-4 py-3.5 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <LogOut size={18} />
                  <span>Cerrar sesión</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
