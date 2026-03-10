interface BarraProgresoProps {
  actual: number;
  total: number;
  etiqueta?: string;
}

export default function BarraProgreso({ actual, total, etiqueta }: BarraProgresoProps) {
  const porcentaje = total > 0 ? Math.round((actual / total) * 100) : 0;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      {etiqueta && (
        <p className="text-sm text-gray-600 mb-2 font-medium">{etiqueta}</p>
      )}
      <div className="flex items-center gap-4">
        <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${porcentaje}%`,
              backgroundColor:
                porcentaje >= 80
                  ? "var(--color-success)"
                  : porcentaje >= 50
                    ? "var(--color-accent)"
                    : "var(--color-warning)",
            }}
          />
        </div>
        <span className="text-sm font-semibold text-gray-700 min-w-[80px] text-right">
          {actual} / {total}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1 text-right">{porcentaje}% completado</p>
    </div>
  );
}
