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

export default function EstudiantesPage() {
  const [filtroNivel, setFiltroNivel] = useState<NivelEducativo | "Todos">("Todos");
  const [filtroCurso, setFiltroCurso] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const cursos = obtenerCursos();
  const resumen = obtenerResumenDia();

  // Filtrar estudiantes
  let estudiantesFiltrados = [...estudiantes];

  if (filtroNivel !== "Todos") {
    estudiantesFiltrados = filtrarPorNivel(filtroNivel);
  }

  if (filtroCurso !== "Todos") {
    estudiantesFiltrados = estudiantesFiltrados.filter((e) => e.curso === filtroCurso);
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

  // Cursos disponibles según nivel seleccionado
  const cursosDisponibles = filtroNivel === "Todos"
    ? cursos
    : cursos.filter((c) => c.nivel === filtroNivel);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Estudiantes</h2>

      {/* Contadores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-sm text-gray-500">Total Registrados</p>
          <p className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
            {resumen.totalEstudiantes}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-sm text-gray-500">Almorzaron Hoy</p>
          <p className="text-2xl font-bold text-green-600">{resumen.almorzaron}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-sm text-gray-500">Pendientes Hoy</p>
          <p className="text-2xl font-bold text-amber-600">{resumen.pendientes}</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-semibold text-gray-500 mb-1">Buscar</label>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Nombre o RUT..."
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Nivel</label>
            <select
              value={filtroNivel}
              onChange={(e) => {
                setFiltroNivel(e.target.value as NivelEducativo | "Todos");
                setFiltroCurso("Todos");
              }}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <option value="Todos">Todos los niveles</option>
              <option value="Inicial">Ciclo Inicial</option>
              <option value="Básica">Educación Básica</option>
              <option value="Media">Educación Media</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Curso</label>
            <select
              value={filtroCurso}
              onChange={(e) => setFiltroCurso(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {estudiantesFiltrados.length > 0 ? (
          <TablaEstudiantes estudiantes={estudiantesFiltrados} />
        ) : (
          <div className="p-8 text-center text-gray-400">
            <p className="text-lg">No se encontraron estudiantes</p>
            <p className="text-sm mt-1">Intente con otros filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}
