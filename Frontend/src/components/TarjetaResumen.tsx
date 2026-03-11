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
    <div className="card p-6 group animate-slide-up">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm font-semibold text-gray-500">{titulo}</p>
        <div
          className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm`}
        >
          <Icono size={22} className={textColor} />
        </div>
      </div>
      <p className={`text-4xl font-black ${textColor} tracking-tight`}>{valor}</p>
      <p className="text-xs text-gray-400 mt-1.5 font-medium">{subtexto}</p>
      <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${bgColor} opacity-40 rounded-b-xl`} />
    </div>
  );
}
