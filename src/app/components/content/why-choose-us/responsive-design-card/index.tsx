import { CheckCircle } from "lucide-react";
import Image from "next/image";

import cellphoneImage from "@/assets/responsive-design-image.png";

const features = [
  "Layouts ajustáveis para diferentes tamanhos de tela.",
  "Otimização para desempenho rápido em dispositivos móveis.",
  "Navegação intuitiva e interações suaves para todos os usuários.",
];

export const ResponsiveDesignCard = () => (
  <section className="bg-muted flex w-full flex-col items-center gap-8 rounded-xl p-6 py-10 md:flex-row md:p-10">
    <article className="z-20 space-y-4">
      <h4 className="text-2xl font-semibold md:text-3xl">Design Responsivo</h4>
      <p className="text-muted-foreground">
        Criamos sites que se adaptam perfeitamente a qualquer dispositivo,
        garantindo uma experiência fluida e intuitiva, seja no computador,
        tablet ou celular.
      </p>
      <ul className="mt-10 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="text-muted-foreground flex items-center gap-2"
          >
            <CheckCircle className="size-4 min-w-4" /> {feature}
          </li>
        ))}
      </ul>
    </article>
    <div className="group relative flex w-full justify-center">
      <div className="to-muted absolute -bottom-2.5 z-10 h-1/2 w-full bg-linear-to-b from-transparent" />
      <div className="ring-ring relative h-150 w-full max-w-80 overflow-hidden rounded-xl ring-8 md:h-100 md:max-w-64">
        <Image
          src={cellphoneImage}
          fill
          alt="design responsivo"
          className="object-cover object-top duration-1000 group-hover:object-bottom"
        />
      </div>
    </div>
  </section>
);
