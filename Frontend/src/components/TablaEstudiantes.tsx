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
            <tr className="border-b border-gray-100 bg-gray-50/80">
              <th className="text-left py-4 px-5 font-bold text-gray-500 text-xs uppercase tracking-wider">
                Estudiante
              </th>
              <th className="text-left py-4 px-5 font-bold text-gray-500 text-xs uppercase tracking-wider">
                RUT
              </th>
              <th className="text-left py-4 px-5 font-bold text-gray-500 text-xs uppercase tracking-wider">
                Curso
              </th>
              <th className="text-left py-4 px-5 font-bold text-gray-500 text-xs uppercase tracking-wider">
                Nivel
              </th>
              <th className="text-center py-4 px-5 font-bold text-gray-500 text-xs uppercase tracking-wider">
                Almuerzo Hoy
              </th>
              <th className="text-left py-4 px-5 font-bold text-gray-500 text-xs uppercase tracking-wider">
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
                  className="border-b border-gray-50 hover:bg-primary/[0.02] transition-colors"
                >
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-xs font-black text-primary shrink-0 border border-primary/[0.06]">
                        {iniciales}
                      </div>
                      <span className="font-semibold text-gray-800">
                        {est.nombre} {est.apellido}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-gray-600 font-medium">{est.rut}</td>
                  <td className="py-3.5 px-5 text-gray-600 font-medium">{est.curso}</td>
                  <td className="py-3.5 px-5">
                    <span className="badge bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1">
                      {est.nivel}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-center">
                    {almorzo ? (
                      <span className="inline-flex items-center gap-1.5 badge bg-success/10 text-success text-xs font-bold px-3 py-1.5">
                        <Check size={13} />
                        Almorzó
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 badge bg-danger/10 text-danger text-xs font-bold px-3 py-1.5">
                        <X size={13} />
                        Pendiente
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-5">
                    <code className="text-xs font-mono text-primary/60 bg-primary/[0.04] px-2.5 py-1.5 rounded-lg border border-primary/[0.08]">
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
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-gray-50/50">
          <p className="text-sm text-gray-400 font-medium">
            Mostrando <span className="font-bold text-gray-600">{inicio + 1}–{Math.min(inicio + porPagina, estudiantes.length)}</span> de{" "}
            {estudiantes.length}
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPaginaActual((p) => Math.max(1, p - 1))}
              disabled={paginaActual === 1}
              className="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPaginaActual(n)}
                className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                  n === paginaActual
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-gray-500 hover:bg-white hover:shadow-sm"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPaginaActual((p) => Math.min(totalPaginas, p + 1))}
              disabled={paginaActual === totalPaginas}
              className="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
