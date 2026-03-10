interface TarjetaResumenProps {
  titulo: string;
  valor: string | number;
  subtexto: string;
  icono: React.ReactNode;
  colorValor?: string;
}

export default function TarjetaResumen({
  titulo,
  valor,
  subtexto,
  icono,
  colorValor = "var(--color-primary)",
}: TarjetaResumenProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <p className="text-sm text-gray-500">{titulo}</p>
        <div className="text-2xl">{icono}</div>
      </div>
      <p className="text-3xl font-bold" style={{ color: colorValor }}>
        {valor}
      </p>
      <p className="text-xs text-gray-400 mt-1">{subtexto}</p>
    </div>
  );
}
