import type { LucideIcon } from "lucide-react";

interface TarjetaResumenProps {
  titulo: string;
  valor: string | number;
  subtexto: string;
  icono: LucideIcon;
  colorClase?: string;
}

export default function TarjetaResumen({
  titulo,
  valor,
  subtexto,
  icono: Icono,
  colorClase = "text-primary bg-primary/10",
}: TarjetaResumenProps) {
  const [textColor, bgColor] = colorClase.split(" ");

  return (
    <div className="card p-5 group animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-medium text-gray-500">{titulo}</p>
        <div
          className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
        >
          <Icono size={20} className={textColor} />
        </div>
      </div>
      <p className={`text-3xl font-bold ${textColor}`}>{valor}</p>
      <p className="text-xs text-gray-400 mt-1">{subtexto}</p>
      <div className={`absolute bottom-0 left-0 h-0.5 w-full ${bgColor} opacity-60 rounded-b-xl`} />
    </div>
  );
}
