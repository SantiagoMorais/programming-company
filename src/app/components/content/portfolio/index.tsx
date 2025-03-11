import { getProjectsByCategory } from "@/database/hygraph-api";

import { PortfolioList } from "./portfolio-list";

export const Portfolio = async () => {
  const categories = await getProjectsByCategory();

  if (!categories.length) return;

  return (
    <section className="w-full max-w-(--breakpoint-xl) space-y-4">
      <article className="flex flex-col items-center gap-4">
        <h3 className="text-center text-3xl font-semibold md:text-4xl">
          Veja nossos projetos
        </h3>
        <p className="text-muted-foreground text-center text-base md:max-w-3/4">
          Criamos eccomerces, sites e blogs pessoais até projetos complexos para
          grandes empresas. Temos todas as soluções que precisar.
        </p>
      </article>

      <PortfolioList categories={categories} />
    </section>
  );
};
