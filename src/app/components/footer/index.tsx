import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/utils/social-media-links";

import { Logo } from "../header/logo";
import { RoutesList } from "../header/routes-list";

export const Footer = () => (
  <footer className="flex w-full max-w-(--breakpoint-xl) flex-col items-center gap-4 px-4 py-8">
    <Separator />
    <section className="flex w-full flex-col items-center gap-4 py-4 md:flex-row md:justify-between md:px-16">
      <Logo invert imageClassName="size-20" textClassName="text-xl" />
      <div className="flex w-full flex-1 flex-col items-center gap-4">
        <p className="text-muted-foreground w-full max-w-80 text-center text-sm">
          Desenvolvimento web personalizado para empresas e empreendedores.
          Transformamos ideias em soluções digitais eficientes.
        </p>
        <ul className="flex gap-2">
          {socialLinks.map(({ icon: Icon, url, title }) => (
            <li key={title}>
              <Button variant={"ghost"} asChild>
                <a href={url} target="_blank">
                  <Icon />
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <RoutesList className="flex-row flex-wrap justify-center pt-0 md:flex-col" />
    </section>
    <Separator />
    <p className="text-muted-foreground flex text-center">
      © Nome da empresa - Todos os direitos reservados 2025.
    </p>
  </footer>
);
