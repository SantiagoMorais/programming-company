import "./globals.css";

import type { Metadata } from "next";
import { Cactus_Classical_Serif, Rubik } from "next/font/google";

import { ThemeTogglerProvider } from "@/contexts/theme-toggler-context";

const rubik = Rubik({
  variable: "--font-rubik-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cactusClassical = Cactus_Classical_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Principia Dev - Desenvolvimento Web Moderno e Estratégico",
  description:
    "Construímos o futuro do seu negócio com soluções web modernas, rápidas e funcionais. " +
    "Especializados em desenvolvimento web, oferecemos sites responsivos, otimizados para performance " +
    "e fáceis de atualizar. Transforme sua presença digital com nossa equipe de especialistas e " +
    "tecnologias de alto desempenho. Impulsione seu negócio hoje!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(rubik.className, cactusClassical.className)}>
        <ThemeTogglerProvider>{children}</ThemeTogglerProvider>
      </body>
    </html>
  );
}
