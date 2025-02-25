import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="flex min-h-[50dvh] w-full flex-col justify-center gap-10">
    <h2 className="text-center text-4xl">
      <strong className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        Do código ao impacto:
      </strong>
      <br />
      construímos o futuro do seu negócio.
    </h2>
    <h3 className="text-center text-xl text-muted-foreground">
      Desenvolvimento de sites e aplicações com visão estratégica. Comece agora
      e expanda para novas oportunidades.
    </h3>
    <div className="flex w-full flex-wrap justify-center gap-4">
      <Button>Entre em contato</Button>
      <Button variant="outline">Sobre nós</Button>
    </div>
  </section>
);
