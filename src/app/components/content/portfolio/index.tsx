import { getProjectsByCategory } from "@/database/hygraph-api";

import { PortfolioList } from "./portfolio-list";
export const Portfolio = async () => {
  const categories = await getProjectsByCategory();

  return (
    <section className="space-y-4">
      <h3 className="text-center text-3xl font-semibold md:text-4xl">
        Veja nossos projetos
      </h3>
      <p className="text-muted-foreground text-base">
        Criamos eccomerces, sites e blogs pessoais até projetos complexos para
        grandes empresas. Temos todas as soluções que precisar.
      </p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <p>{category.categoryName} - lista de projetos: </p>
            <p>
              {category.portfolios.map((project) => (
                <span key={project.id}>{project.description}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
      <PortfolioList />
    </section>
  );
};
