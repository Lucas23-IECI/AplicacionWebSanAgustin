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
    <div className="card p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        {etiqueta && (
          <p className="text-sm font-semibold text-gray-600">{etiqueta}</p>
        )}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-700">
            {actual} / {total}
          </span>
          <span className={`badge text-xs font-bold px-3 py-1 ${
            porcentaje >= 80 ? "bg-success/10 text-success" : porcentaje >= 50 ? "bg-accent/10 text-accent" : "bg-warning/10 text-warning"
          }`}>
            {porcentaje}%
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorBarra} transition-all duration-700 ease-out shadow-sm`}
          style={{ width: `${porcentaje}%` }}
        />
      </div>
    </div>
  );
}
