import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema de Comedores - Colegio San Agustín Concepción",
  description:
    "Sistema de control y gestión de comedores y almuerzos para estudiantes del Colegio San Agustín de Concepción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
