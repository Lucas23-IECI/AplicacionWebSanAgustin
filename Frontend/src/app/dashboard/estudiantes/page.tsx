"use client";

import { useState } from "react";
import TablaEstudiantes from "@/components/TablaEstudiantes";
import {
  estudiantes,
  obtenerCursos,
  filtrarPorNivel,
  obtenerResumenDia,
} from "@/lib/datosEjemplo";
import type { NivelEducativo } from "@/types";
import { Users, UtensilsCrossed, Clock, Search } from "lucide-react";

const niveles: { valor: NivelEducativo | "Todos"; etiqueta: string; emoji: string }[] = [
  { valor: "Todos", etiqueta: "Todos", emoji: "📋" },
  { valor: "Inicial", etiqueta: "Inicial", emoji: "🎒" },
  { valor: "Básica", etiqueta: "Básica", emoji: "📚" },
  { valor: "Media", etiqueta: "Media", emoji: "🎓" },
];

export default function EstudiantesPage() {
  const [filtroNivel, setFiltroNivel] = useState<NivelEducativo | "Todos">(
    "Todos"
  );
  const [filtroCurso, setFiltroCurso] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const cursos = obtenerCursos();
  const resumen = obtenerResumenDia();

  let estudiantesFiltrados = [...estudiantes];

  if (filtroNivel !== "Todos") {
    estudiantesFiltrados = filtrarPorNivel(filtroNivel);
  }

  if (filtroCurso !== "Todos") {
    estudiantesFiltrados = estudiantesFiltrados.filter(
      (e) => e.curso === filtroCurso
    );
  }

  if (busqueda.trim()) {
    const termino = busqueda.toLowerCase();
    estudiantesFiltrados = estudiantesFiltrados.filter(
      (e) =>
        e.nombre.toLowerCase().includes(termino) ||
        e.apellido.toLowerCase().includes(termino) ||
        e.rut.includes(termino)
    );
  }

  const cursosDisponibles =
    filtroNivel === "Todos"
      ? cursos
      : cursos.filter((c) => c.nivel === filtroNivel);

  const contadores = [
    {
      label: "Total Registrados",
      value: resumen.totalEstudiantes,
      icon: Users,
      color: "text-primary bg-primary/10",
    },
    {
      label: "Almorzaron Hoy",
      value: resumen.almorzaron,
      icon: UtensilsCrossed,
      color: "text-success bg-success/10",
    },
    {
      label: "Pendientes Hoy",
      value: resumen.pendientes,
      icon: Clock,
      color: "text-warning bg-warning/10",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header con banner */}
      <div className="animate-fade-in">
        <div className="relative bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl p-7 sm:p-9 overflow-hidden shadow-xl shadow-primary/10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple/12 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 glass text-white/70 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <Users size={12} className="text-accent" />
                Gestión de Estudiantes
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Listado de Estudiantes
              </h2>
              <p className="text-white/45 mt-1.5 font-medium">
                {estudiantes.length} estudiantes registrados en el sistema
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contadores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {contadores.map((c) => {
          const Icono = c.icon;
          const [textColor, bgColor] = c.color.split(" ");
          return (
            <div key={c.label} className="card p-5 flex items-center gap-4 group">
              <div
                className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
              >
                <Icono size={22} className={textColor} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                <p className={`text-2xl font-black ${textColor}`}>{c.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filtros */}
      <div className="card p-5">
        <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-end">
          {/* Búsqueda */}
          <div className="flex-1 min-w-[220px] w-full lg:w-auto">
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Buscar estudiante
            </label>
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Nombre, apellido o RUT..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Chips de nivel */}
          <div className="w-full lg:w-auto">
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Nivel educativo
            </label>
            <div className="flex gap-1.5 flex-wrap">
              {niveles.map((n) => (
                <button
                  key={n.valor}
                  onClick={() => {
                    setFiltroNivel(n.valor);
                    setFiltroCurso("Todos");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    filtroNivel === n.valor
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm"
                  }`}
                >
                  <span className="mr-1">{n.emoji}</span> {n.etiqueta}
                </button>
              ))}
            </div>
          </div>

          {/* Curso */}
          <div className="w-full lg:w-auto">
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Curso
            </label>
            <select
              value={filtroCurso}
              onChange={(e) => setFiltroCurso(e.target.value)}
              className="w-full lg:w-auto px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
            >
              <option value="Todos">Todos los cursos</option>
              {cursosDisponibles.map((c) => (
                <option key={c.nombre} value={c.nombre}>
                  {c.nombre} ({c.cantidadEstudiantes})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resultado de filtro */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400 font-medium">
            Mostrando <span className="font-bold text-gray-600">{estudiantesFiltrados.length}</span> de {estudiantes.length} estudiantes
          </p>
          {(filtroNivel !== "Todos" || filtroCurso !== "Todos" || busqueda.trim()) && (
            <button
              onClick={() => { setFiltroNivel("Todos"); setFiltroCurso("Todos"); setBusqueda(""); }}
              className="text-xs font-semibold text-primary hover:text-primary-light transition-colors"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Tabla */}
      <div className="card overflow-hidden">
        {estudiantesFiltrados.length > 0 ? (
          <TablaEstudiantes estudiantes={estudiantesFiltrados} />
        ) : (
          <div className="p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-gray-300" />
            </div>
            <p className="text-lg font-bold text-gray-600">
              No se encontraron estudiantes
            </p>
            <p className="text-sm text-gray-400 mt-1.5">
              Intente con otros filtros de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
