"use client";

import { PortfolioList } from "./portfolio-list";
export const Portfolio = () => (
  <section className="space-y-4">
    <h3 className="text-center text-3xl font-semibold md:text-4xl">
      Veja nossos projetos
    </h3>
    <p className="text-muted-foreground text-base">
      Criamos eccomerces, sites e blogs pessoais até projetos complexos para
      grandes empresas. Temos todas as soluções que precisar.
    </p>
    <PortfolioList />
  </section>
);
