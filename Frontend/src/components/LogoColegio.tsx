import Image from "next/image";

interface LogoColegioProps {
  variante?: "grande" | "chico" | "sidebar" | "hero" | "navbar";
}

export default function LogoColegio({ variante = "chico" }: LogoColegioProps) {
  const tamaños = {
    grande: { width: 180, height: 180, className: "w-44 h-44" },
    hero: { width: 140, height: 140, className: "w-36 h-36" },
    chico: { width: 48, height: 48, className: "w-12 h-12" },
    navbar: { width: 36, height: 36, className: "w-9 h-9" },
    sidebar: { width: 40, height: 40, className: "w-10 h-10" },
  };

  const config = tamaños[variante];

  return (
    <Image
      src="/Imagenes/Logo/LogoCSACfondoBlanco.png"
      alt="Logo Colegio San Agustín Concepción"
      width={config.width}
      height={config.height}
      className={`${config.className} object-contain`}
      priority
    />
  );
}
