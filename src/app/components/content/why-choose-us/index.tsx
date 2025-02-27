import { CheckCircle } from "lucide-react";
import Image from "next/image";

import cellphoneImage from "@/assets/responsive-design-image.png";

export const WhyChooseUs = () => (
  <section className="w-full max-w-(--breakpoint-xl) space-y-8">
    <header className="flex w-full flex-col items-center gap-4 pb-8">
      <h3 className="text-center text-3xl font-semibold md:text-4xl">
        Por que escolher nossos serviços?
      </h3>
      <p className="text-muted-foreground max-w-(--breakpoint-sm) text-center">
        Desenvolvemos soluções personalizadas para atender às suas necessidades.
        Descubra como podemos impulsionar o seu negócio!
      </p>
    </header>
    <section className="bg-muted flex w-full flex-col items-center gap-8 rounded-xl p-6 py-10 md:flex-row md:p-10">
      <article className="z-20 space-y-4">
        <h4 className="text-2xl font-semibold md:text-3xl">
          Design Responsivo
        </h4>
        <p className="text-muted-foreground">
          Criamos sites que se adaptam perfeitamente a qualquer dispositivo,
          garantindo uma experiência fluida e intuitiva, seja no computador,
          tablet ou celular.
        </p>
        <ul className="mt-10 space-y-4">
          <li className="text-muted-foreground flex items-center gap-2">
            <CheckCircle size={15} /> Layouts ajustáveis para diferentes
            tamanhos de tela.
          </li>
          <li className="text-muted-foreground flex items-center gap-2">
            <CheckCircle size={15} />
            Otimização para desempenho rápido em dispositivos móveis.
          </li>
          <li className="text-muted-foreground flex items-center gap-2">
            <CheckCircle size={15} />
            Navegação intuitiva e interações suaves para todos os usuários.
          </li>
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
  </section>
);
