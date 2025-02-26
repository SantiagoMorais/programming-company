import { CoreTechnologies } from "./core-technologies";
import { Hero } from "./hero";

export const Content = () => (
  <section className="flex h-auto w-full max-w-(--breakpoint-2xl) flex-col items-center p-4 py-8">
    <Hero />
    <CoreTechnologies />
  </section>
);
