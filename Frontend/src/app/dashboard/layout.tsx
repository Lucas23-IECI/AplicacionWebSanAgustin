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
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary to-primary-light shadow-xl animate-slide-down border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Nombre */}
            <Link href="/dashboard" className="flex items-center gap-3 shrink-0 group">
              <div className="bg-white rounded-lg p-1 shadow-md group-hover:shadow-lg transition-shadow">
                <LogoColegio variante="sidebar" />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-white text-sm leading-tight">
                  San Agustín
                </p>
                <p className="text-[11px] text-white/50 font-medium">
                  Control de Comedores
                </p>
              </div>
            </Link>

            {/* Nav central — desktop */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-xl p-1">
              {enlacesNav.map((enlace) => {
                const activo = ruta === enlace.href;
                const Icono = enlace.icono;
                return (
                  <Link
                    key={enlace.href}
                    href={enlace.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activo
                        ? "text-white bg-white/15 shadow-sm"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icono size={18} />
                    <span>{enlace.etiqueta}</span>
                    {activo && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Derecha: fecha + notificación + avatar + logout */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-white/40 text-xs bg-white/5 px-3 py-1.5 rounded-lg">
                <Calendar size={12} />
                <span className="capitalize">{fechaHoy}</span>
              </div>
              <div className="h-5 w-px bg-white/15" />
              <button className="relative text-white/50 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </button>
              <div className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3 py-1.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-primary font-bold text-xs shadow-md">
                  AD
                </div>
                <div className="hidden lg:block">
                  <p className="text-white text-xs font-semibold">Admin</p>
                  <p className="text-white/40 text-[10px]">Administrador</p>
                </div>
              </div>
              <Link
                href="/"
                className="text-white/40 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg"
                title="Cerrar sesión"
              >
                <LogOut size={18} />
              </Link>
            </div>

            {/* Hamburguesa — mobile */}
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menú"
            >
              {menuAbierto ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuAbierto && (
          <div className="md:hidden border-t border-white/10 bg-primary-dark animate-slide-down">
            <div className="px-4 py-3 space-y-1">
              {enlacesNav.map((enlace) => {
                const activo = ruta === enlace.href;
                const Icono = enlace.icono;
                return (
                  <Link
                    key={enlace.href}
                    href={enlace.href}
                    onClick={() => setMenuAbierto(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                      activo
                        ? "bg-white/15 text-white font-semibold"
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icono size={18} />
                    <span>{enlace.etiqueta}</span>
                    {activo && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}
              <div className="border-t border-white/10 pt-3 mt-3">
                <div className="flex items-center gap-2 px-4 py-2 text-white/40 text-xs">
                  <Calendar size={14} />
                  <span className="capitalize">{fechaHoy}</span>
                </div>
                <Link
                  href="/"
                  onClick={() => setMenuAbierto(false)}
                  className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white text-sm transition-colors"
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
