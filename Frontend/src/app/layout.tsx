import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sistema de Comedores - Colegio San Agustín Concepción",
  description:
    "Sistema de control y gestión de comedores y almuerzos para estudiantes del Colegio San Agustín de Concepción",
  other: {
    "theme-color": "#1a1a5e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
