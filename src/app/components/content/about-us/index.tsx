import Image from "next/image";

import aboutUsImage from "@/assets/about-us-section/about-us.jpg";

export const AboutUs = () => (
  <section className="flex max-w-(--breakpoint-xl) flex-col gap-2 md:flex-row md:gap-10">
    <h2 className="mb-6 block text-center text-3xl font-semibold md:hidden md:text-start">
      Quem somos?
    </h2>
    <div className="relative h-[90dvw] w-full overflow-hidden rounded-xl md:h-150 md:w-[40dvw] md:max-w-100">
      <div className="to-background absolute bottom-0 left-0 z-10 h-1/4 w-full bg-linear-to-b from-transparent md:hidden" />
      <Image fill src={aboutUsImage} alt="Sobre nós" className="object-cover" />
    </div>
    <article className="flex-1 space-y-8 py-4">
      <div className="space-y-4">
        <h2 className="hidden font-semibold md:block md:text-4xl">
          Quem somos?
        </h2>
        <p className="text-muted-foreground">
          Somos uma empresa especializada em criar soluções web para negócios de
          todos os tamanhos. Desenvolvemos sites modernos, rápidos e funcionais,
          atendendo às necessidades específicas de cada cliente, desde
          microempreendedores até grandes empresas.
        </p>
        <p className="text-muted-foreground">
          Nosso objetivo é ajudar nossos clientes a crescerem digitalmente,
          oferecendo uma presença online eficiente, visualmente marcante e
          adaptada às suas demandas.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="w-fit text-center text-3xl font-semibold md:text-start md:text-4xl">
          O que nos torna diferentes?
        </h3>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="text-primary flex min-w-full flex-1 flex-col gap-2 rounded-lg border p-5 select-none md:min-w-60">
            <strong className="text-foreground">Equipe especializada:</strong>{" "}
            <p className="text-muted-foreground md:max-w-80">
              Programadores experientes, com apoio de parceiros qualificiados em
              design e marketing digital.
            </p>
          </li>
          <li className="text-muted-foreground flex min-w-full flex-1 flex-col gap-2 rounded-lg border p-5 select-none md:min-w-60">
            <strong className="text-foreground">
              Atendimento personalizado:
            </strong>{" "}
            <p className="text-muted-foreground md:max-w-80">
              Entendemos as necessidades do cliente antes de iniciar qualquer
              projeto.
            </p>
          </li>
          <li className="text-muted-foreground flex min-w-full flex-1 flex-col gap-2 rounded-lg border p-5 select-none md:min-w-60">
            <strong className="text-foreground">Foco no sucesso:</strong>{" "}
            <p className="text-muted-foreground md:max-w-80">
              Ajudamos nossos clientes a se destacar e crescer no mercado
              digital.
            </p>
          </li>
        </ul>
      </div>
    </article>
  </section>
);
