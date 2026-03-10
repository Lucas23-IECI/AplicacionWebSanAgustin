"use client";

import { useState } from "react";
import type { Estudiante } from "@/types";
import { yaAlmorzoHoy } from "@/lib/datosEjemplo";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";

interface TablaEstudiantesProps {
  estudiantes: Estudiante[];
}

export default function TablaEstudiantes({ estudiantes }: TablaEstudiantesProps) {
  const [paginaActual, setPaginaActual] = useState(1);
  const porPagina = 10;

  const totalPaginas = Math.ceil(estudiantes.length / porPagina);
  const inicio = (paginaActual - 1) * porPagina;
  const estudiantesPagina = estudiantes.slice(inicio, inicio + porPagina);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                Estudiante
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                RUT
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                Curso
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                Nivel
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                Almuerzo Hoy
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">
                Código QR
              </th>
            </tr>
          </thead>
          <tbody>
            {estudiantesPagina.map((est) => {
              const almorzo = yaAlmorzoHoy(est.id);
              const iniciales = `${est.nombre[0]}${est.apellido[0]}`;
              return (
                <tr
                  key={est.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {iniciales}
                      </div>
                      <span className="font-medium text-gray-800">
                        {est.nombre} {est.apellido}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{est.rut}</td>
                  <td className="py-3 px-4 text-gray-600">{est.curso}</td>
                  <td className="py-3 px-4">
                    <span className="badge bg-gray-100 text-gray-600 text-xs">
                      {est.nivel}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {almorzo ? (
                      <span className="inline-flex items-center gap-1 badge bg-success/10 text-success text-xs">
                        <Check size={12} />
                        Almorzó
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 badge bg-danger/10 text-danger text-xs">
                        <X size={12} />
                        Pendiente
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      {est.codigoQR}
                    </code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {totalPaginas > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            {inicio + 1}–{Math.min(inicio + porPagina, estudiantes.length)} de{" "}
            {estudiantes.length}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPaginaActual((p) => Math.max(1, p - 1))}
              disabled={paginaActual === 1}
              className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPaginaActual(n)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  n === paginaActual
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPaginaActual((p) => Math.min(totalPaginas, p + 1))}
              disabled={paginaActual === totalPaginas}
              className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
