interface BarraProgresoProps {
  actual: number;
  total: number;
  etiqueta?: string;
}

export default function BarraProgreso({ actual, total, etiqueta }: BarraProgresoProps) {
  const porcentaje = total > 0 ? Math.round((actual / total) * 100) : 0;

  const colorBarra =
    porcentaje >= 80
      ? "from-success to-emerald-400"
      : porcentaje >= 50
        ? "from-accent to-yellow-400"
        : "from-warning to-orange-400";

  return (
    <div className="card p-5 animate-slide-up">
      <div className="flex items-center justify-between mb-3">
        {etiqueta && (
          <p className="text-sm font-medium text-gray-600">{etiqueta}</p>
        )}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">
            {actual} / {total}
          </span>
          <span className="badge bg-gray-100 text-gray-600 text-xs">
            {porcentaje}%
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorBarra} transition-all duration-700 ease-out`}
          style={{ width: `${porcentaje}%` }}
        />
      </div>
    </div>
  );
}
