"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoColegio from "@/components/LogoColegio";

const enlacesNav = [
  { href: "/dashboard", etiqueta: "Resumen", icono: "📊" },
  { href: "/dashboard/registro", etiqueta: "Registro Diario", icono: "📋" },
  { href: "/dashboard/estudiantes", etiqueta: "Estudiantes", icono: "👥" },
  { href: "/dashboard/reportes", etiqueta: "Reportes", icono: "📈" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ruta = usePathname();

  return (
    <div className="min-h-screen flex">
      {/* Barra lateral */}
      <aside className="w-64 text-white p-4 flex flex-col" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white rounded-lg p-1">
            <LogoColegio variante="sidebar" />
          </div>
          <div>
            <p className="font-bold text-sm">San Agustín</p>
            <p className="text-xs text-blue-200">Control de Comedores</p>
          </div>
        </div>

        <nav className="space-y-1 flex-1">
          {enlacesNav.map((enlace) => {
            const activo = ruta === enlace.href;
            return (
              <Link
                key={enlace.href}
                href={enlace.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activo
                    ? "bg-white/20 text-white font-semibold"
                    : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{enlace.icono}</span>
                <span>{enlace.etiqueta}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer del sidebar */}
        <div className="border-t border-white/20 pt-4 mt-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-blue-200 hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </aside>

      {/* Contenido */}
      <div className="flex-1 bg-gray-50">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-700">
            Panel de Control
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">
              {new Date().toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long" })}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Administrador
            </span>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
