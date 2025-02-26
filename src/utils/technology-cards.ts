import { StaticImageData } from "next/image";

import hygraphLogo from "@/assets/icons/hygraph.png";
import nextjsLogo from "@/assets/icons/nextjs.png";
import reactLogo from "@/assets/icons/react.png";
import tailwindLogo from "@/assets/icons/tailwind.png";
import typescriptLogo from "@/assets/icons/typescript.png";
import zodLogo from "@/assets/icons/zod.png";

export interface ITechnologyCard {
  image: StaticImageData;
  title: string;
  content: string;
}

export const technologyCards: ITechnologyCard[] = [
  {
    image: reactLogo,
    title: "React",
    content: "Criação de sites modernos e interativos, destacando seu negócio.",
  },
  {
    image: nextjsLogo,
    title: "Next.js",
    content:
      "Desenvolve sites rápidos e otimizados, entregando resultados notáveis.",
  },
  {
    image: typescriptLogo,
    title: "TypeScript",
    content:
      "Aprimora o código, garantindo segurança e performance para um site confiável.",
  },
  {
    image: zodLogo,
    title: "Zod",
    content:
      "Valida dados com precisão, mantendo seu site seguro e consistentes.",
  },
  {
    image: hygraphLogo,
    title: "Hygraph",
    content:
      "Gerencia conteúdos e é prático e fácil. Funciona como um banco de dados para seu site.",
  },
  {
    image: tailwindLogo,
    title: "Tailwind",
    content:
      "Cria designs modernos, responsivos e atraentes, adaptados a qualquer dispositivo.",
  },
];
