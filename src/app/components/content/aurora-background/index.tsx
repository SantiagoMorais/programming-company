import React from "react";

import { Button } from "@/components/ui/button";
import { whatsAppLink } from "@/utils/whatsApp";

export const AuroraBackground = () => {
  return (
    <section className="bg-sidebar relative w-full overflow-hidden rounded-xl py-16 md:py-30">
      <div className="aurora-background absolute inset-0 rounded-3xl" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 text-center">
        <h2 className="text-foreground text-3xl font-semibold md:text-5xl">
          Pronto para começar?
        </h2>
        <p className="text-muted-foreground max-w-100">
          Construa sites modernos, escaláveis e performáticos conosco para
          impressionar os seus clientes. Leve o seu trabalho para o próximo
          nível hoje!
        </p>
        <Button variant={"default"} asChild>
          <a href={whatsAppLink} target="_blank">
            Entre em contato
          </a>
        </Button>
      </div>
    </section>
  );
};
