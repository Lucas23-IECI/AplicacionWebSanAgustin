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

const niveles: { valor: NivelEducativo | "Todos"; etiqueta: string }[] = [
  { valor: "Todos", etiqueta: "Todos" },
  { valor: "Inicial", etiqueta: "Inicial" },
  { valor: "Básica", etiqueta: "Básica" },
  { valor: "Media", etiqueta: "Media" },
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
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-fade-in">
        Estudiantes
      </h2>

      {/* Contadores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {contadores.map((c) => {
          const Icono = c.icon;
          const [textColor, bgColor] = c.color.split(" ");
          return (
            <div key={c.label} className="card p-4 flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center shrink-0`}
              >
                <Icono size={20} className={textColor} />
              </div>
              <div>
                <p className="text-xs text-gray-400">{c.label}</p>
                <p className={`text-xl font-bold ${textColor}`}>{c.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filtros */}
      <div className="card p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-end">
          {/* Búsqueda */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">
              Buscar
            </label>
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Nombre o RUT..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Chips de nivel */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">
              Nivel
            </label>
            <div className="flex gap-1">
              {niveles.map((n) => (
                <button
                  key={n.valor}
                  onClick={() => {
                    setFiltroNivel(n.valor);
                    setFiltroCurso("Todos");
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filtroNivel === n.valor
                      ? "bg-primary text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {n.etiqueta}
                </button>
              ))}
            </div>
          </div>

          {/* Curso */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">
              Curso
            </label>
            <select
              value={filtroCurso}
              onChange={(e) => setFiltroCurso(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
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
      </div>

      {/* Tabla */}
      <div className="card overflow-hidden">
        {estudiantesFiltrados.length > 0 ? (
          <TablaEstudiantes estudiantes={estudiantesFiltrados} />
        ) : (
          <div className="p-12 text-center text-gray-400">
            <Users size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-lg font-medium">
              No se encontraron estudiantes
            </p>
            <p className="text-sm mt-1">
              Intente con otros filtros de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
