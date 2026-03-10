"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { procesarEscaneo } from "@/lib/datosEjemplo";
import type { ResultadoEscaneo } from "@/types";

export default function LectorQR() {
  const [resultado, setResultado] = useState<ResultadoEscaneo | null>(null);
  const [codigoManual, setCodigoManual] = useState("");
  const [modoManual, setModoManual] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mantener foco en el input para la pistola USB
  const enfocarInput = useCallback(() => {
    if (inputRef.current && !modoManual) {
      inputRef.current.focus();
    }
  }, [modoManual]);

  useEffect(() => {
    enfocarInput();
    const intervalo = setInterval(enfocarInput, 1000);
    return () => clearInterval(intervalo);
  }, [enfocarInput]);

  const procesarCodigo = (codigo: string) => {
    if (!codigo.trim()) return;
    const res = procesarEscaneo(codigo.trim());
    setResultado(res);

    // Limpiar después de 4 segundos
    setTimeout(() => {
      setResultado(null);
      setCodigoManual("");
      enfocarInput();
    }, 4000);
  };

  const manejarTeclaPistola = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      procesarCodigo(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  const manejarEnvioManual = (e: React.FormEvent) => {
    e.preventDefault();
    procesarCodigo(codigoManual);
  };

  const coloresFeedback = {
    exito: { bg: "bg-green-50", borde: "border-green-400", texto: "text-green-800", icono: "✅" },
    duplicado: { bg: "bg-amber-50", borde: "border-amber-400", texto: "text-amber-800", icono: "⚠️" },
    "no-encontrado": { bg: "bg-red-50", borde: "border-red-400", texto: "text-red-800", icono: "❌" },
  };

  return (
    <div className="space-y-4">
      {/* Input invisible para la pistola USB */}
      {!modoManual && (
        <input
          ref={inputRef}
          type="text"
          onKeyDown={manejarTeclaPistola}
          className="absolute opacity-0 pointer-events-none"
          aria-label="Entrada para lector QR USB"
          tabIndex={-1}
          autoComplete="off"
        />
      )}

      {/* Zona de escaneo */}
      <div className="relative">
        {!resultado ? (
          <div className="flex flex-col items-center justify-center h-56 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-3 animate-pulse">📷</div>
            <p className="text-lg font-medium text-gray-600">
              Esperando lectura QR...
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Escanee la tarjeta del estudiante con la pistola lectora
            </p>
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-center h-56 rounded-xl border-2 ${coloresFeedback[resultado.estado].bg} ${coloresFeedback[resultado.estado].borde} transition-all`}
          >
            <div className="text-5xl mb-3">
              {coloresFeedback[resultado.estado].icono}
            </div>
            <p className={`text-lg font-bold ${coloresFeedback[resultado.estado].texto}`}>
              {resultado.mensaje}
            </p>
            {resultado.estudiante && (
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-600">
                  {resultado.estudiante.curso} — {resultado.estudiante.nivel}
                </p>
                <p className="text-xs text-gray-400">
                  RUT: {resultado.estudiante.rut}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modo manual para demo */}
      <div className="border-t pt-4">
        <button
          onClick={() => setModoManual(!modoManual)}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          {modoManual ? "Volver al modo lector USB" : "Ingreso manual (para demo)"}
        </button>

        {modoManual && (
          <form onSubmit={manejarEnvioManual} className="mt-3 flex gap-2">
            <input
              type="text"
              value={codigoManual}
              onChange={(e) => setCodigoManual(e.target.value)}
              placeholder="Ej: SA-1B-001"
              className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              autoComplete="off"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Registrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
