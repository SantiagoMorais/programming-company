import { CheckCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { IWhyChooseUsTemplateCardProps } from "@/core/interfaces/why-choose-us-template-card-props";

export const WhyChooseUsTemplateCard = ({
  className,
  children,
  title,
  subtitle,
  content,
  reverseContent,
}: IWhyChooseUsTemplateCardProps) => (
  <section
    className={twMerge(
      "bg-muted flex w-full flex-col items-center gap-8 rounded-xl p-6 md:flex-row md:p-10 md:py-20",
      className
    )}
  >
    <div className={`w-full flex-1 ${reverseContent && "md:order-2"}`}>
      {children}
    </div>
    <article
      className={`z-20 flex-1 space-y-4 ${reverseContent && "md:order-1"}`}
    >
      <h4
        className={`text-2xl font-semibold md:text-3xl ${reverseContent && "md:text-end"}`}
      >
        {title}
      </h4>
      <p className={`text-muted-foreground ${reverseContent && "md:text-end"}`}>
        {subtitle}
      </p>
      <ul className="mt-10 space-y-4">
        {content.map((feature) => (
          <li
            key={feature}
            className={`flex items-center gap-2 ${reverseContent && "text-end md:flex-row-reverse"}`}
          >
            <CheckCircle className="size-4 min-w-4" />{" "}
            <p className="text-muted-foreground">{feature}</p>
          </li>
        ))}
      </ul>
    </article>
  </section>
);
