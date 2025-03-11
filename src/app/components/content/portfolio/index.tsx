import { getProjectsByCategory } from "@/database/hygraph-api";

import { ContentComingSoon } from "./content-coming-soon";
import { PortfolioList } from "./portfolio-list";

export const Portfolio = async ({ id }: { id: string }) => {
  const categories = await getProjectsByCategory();

  const renderContent = () => {
    if (!categories.length) return <ContentComingSoon />;
    return <PortfolioList categories={categories} />;
  };

  return (
    <section
      id={id}
      className="flex w-full max-w-(--breakpoint-xl) flex-col items-center gap-4"
    >
      <article className="flex flex-col items-center gap-4">
        <h3 className="text-center text-3xl font-semibold md:text-4xl">
          Veja nossos projetos
        </h3>
        <p className="text-muted-foreground text-center text-base md:max-w-3/4">
          Criamos eccomerces, sites e blogs pessoais até projetos complexos para
          grandes empresas. Temos todas as soluções que precisar.
        </p>
      </article>

      {renderContent()}
    </section>
  );
};
