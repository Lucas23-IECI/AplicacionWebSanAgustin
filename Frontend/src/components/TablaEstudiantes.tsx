"use client";

import { useState } from "react";
import type { Estudiante } from "@/types";
import { yaAlmorzoHoy } from "@/lib/datosEjemplo";

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
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Nombre</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">RUT</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Curso</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Nivel</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-600">Almuerzo Hoy</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Código QR</th>
            </tr>
          </thead>
          <tbody>
            {estudiantesPagina.map((est) => {
              const almorzo = yaAlmorzoHoy(est.id);
              return (
                <tr
                  key={est.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {est.nombre} {est.apellido}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{est.rut}</td>
                  <td className="py-3 px-4 text-gray-600">{est.curso}</td>
                  <td className="py-3 px-4 text-gray-600">{est.nivel}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        almorzo
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {almorzo ? "✓ Almorzó" : "✗ Pendiente"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500 font-mono text-xs">
                    {est.codigoQR}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {totalPaginas > 1 && (
        <div className="flex items-center justify-between mt-4 px-4">
          <p className="text-sm text-gray-500">
            Mostrando {inicio + 1}-{Math.min(inicio + porPagina, estudiantes.length)} de {estudiantes.length}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPaginaActual((p) => Math.max(1, p - 1))}
              disabled={paginaActual === 1}
              className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 hover:bg-gray-100"
            >
              Anterior
            </button>
            <button
              onClick={() => setPaginaActual((p) => Math.min(totalPaginas, p + 1))}
              disabled={paginaActual === totalPaginas}
              className="px-3 py-1 text-sm border rounded-lg disabled:opacity-50 hover:bg-gray-100"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
