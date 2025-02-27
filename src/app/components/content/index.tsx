import { CoreTechnologies } from "./core-technologies";
import { FAQs } from "./faqs";
import { Hero } from "./hero";

export const Content = () => (
  <section className="flex h-auto w-full max-w-(--breakpoint-2xl) flex-col items-center gap-20 p-4 py-8 md:gap-10">
    <Hero />
    <CoreTechnologies />
    <FAQs />
  </section>
);
