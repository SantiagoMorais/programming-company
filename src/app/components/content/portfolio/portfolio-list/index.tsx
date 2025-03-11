"use client";
import parse from "html-react-parser";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ICategories } from "@/core/interfaces/queries/get-projects-by-portfolio";

import { VisitWebsiteComponent } from "./visit-website-component";

export const PortfolioList = ({ categories }: ICategories) => {
  const [categorySelectedId, setCategorySelectedId] = useState<string>(
    categories[0].id
  );

  const handleCategorySelected = (id: string) => {
    setCategorySelectedId(id);
  };

  const selectedCategory = categories.find(
    (category) => category.id === categorySelectedId
  );

  return (
    <section className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-8">
      <ul className="flex w-full flex-wrap items-center justify-center gap-2 md:w-fit md:flex-col">
        {categories.map((category) => (
          <li
            key={category.id}
            className="w-full flex-1"
            onClick={() => handleCategorySelected(category.id)}
          >
            <Button
              variant="ghost"
              className={`w-full md:justify-start md:text-lg ${category.id === selectedCategory?.id && "bg-primary/20 text-primary"}`}
            >
              {parse(category.lucideIconSvg)}
              {category.categoryName}
            </Button>
          </li>
        ))}
      </ul>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {selectedCategory?.projects.map((project) => (
          <Card key={project.id} className="bg-muted w-full">
            <CardHeader>
              <CardTitle className="text-lg">{project?.description}</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                key={project.id}
                className="group relative h-80 w-full overflow-hidden rounded-lg"
              >
                <VisitWebsiteComponent projectUrl={project.projectUrl} />
                <Image
                  src={project.banner.url}
                  alt={project.description}
                  fill
                  className="object-cover object-top duration-300 group-hover:scale-110"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
