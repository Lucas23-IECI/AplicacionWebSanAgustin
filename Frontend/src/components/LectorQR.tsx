"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { procesarEscaneo } from "@/lib/datosEjemplo";
import type { ResultadoEscaneo } from "@/types";
import {
  ScanLine,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Keyboard,
  Wifi,
} from "lucide-react";

export default function LectorQR() {
  const [resultado, setResultado] = useState<ResultadoEscaneo | null>(null);
  const [codigoManual, setCodigoManual] = useState("");
  const [modoManual, setModoManual] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const feedback = {
    exito: {
      bg: "bg-success/5",
      border: "border-success/40",
      text: "text-success",
      icon: CheckCircle2,
    },
    duplicado: {
      bg: "bg-warning/5",
      border: "border-warning/40",
      text: "text-warning",
      icon: AlertTriangle,
    },
    "no-encontrado": {
      bg: "bg-danger/5",
      border: "border-danger/40",
      text: "text-danger",
      icon: XCircle,
    },
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
          <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary/30 transition-colors">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 shadow-sm">
              <ScanLine size={36} className="text-primary animate-pulse-soft" />
            </div>
            <p className="text-xl font-black text-gray-700 tracking-tight">
              Esperando lectura QR...
            </p>
            <p className="text-sm text-gray-400 mt-2 max-w-xs text-center">
              Escanee la tarjeta del estudiante con la pistola lectora USB
            </p>
            <div className="flex items-center gap-2 mt-4 bg-success/10 text-success text-xs font-bold px-4 py-2 rounded-full">
              <Wifi size={13} />
              <span>Lector conectado</span>
            </div>
          </div>
        ) : (() => {
          const fb = feedback[resultado.estado];
          const Icono = fb.icon;
          return (
            <div
              className={`flex flex-col items-center justify-center h-64 rounded-2xl border-2 ${fb.bg} ${fb.border} animate-scale-in`}
            >
              <div className={`w-16 h-16 rounded-2xl ${fb.bg} flex items-center justify-center mb-4`}>
                <Icono size={40} className={`${fb.text}`} />
              </div>
              <p className={`text-xl font-black ${fb.text} tracking-tight`}>
                {resultado.mensaje}
              </p>
              {resultado.estudiante && (
                <div className="mt-2 text-center">
                  <p className="text-sm text-gray-600">
                    {resultado.estudiante.curso} —{" "}
                    {resultado.estudiante.nivel}
                  </p>
                  <p className="text-xs text-gray-400">
                    RUT: {resultado.estudiante.rut}
                  </p>
                </div>
              )}
            </div>
          );
        })()}
      </div>

      {/* Modo manual */}
      <div className="border-t border-gray-100 pt-4">
        <button
          onClick={() => setModoManual(!modoManual)}
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors"
        >
          <Keyboard size={14} />
          {modoManual
            ? "Volver al modo lector USB"
            : "Ingreso manual (para demo)"}
        </button>

        {modoManual && (
          <form onSubmit={manejarEnvioManual} className="mt-3 flex gap-2">
            <input
              type="text"
              value={codigoManual}
              onChange={(e) => setCodigoManual(e.target.value)}
              placeholder="Ej: SA-1B-001"
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn btn-primary px-5"
            >
              Registrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
