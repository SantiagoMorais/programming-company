import { AboutUs } from "./about-us";
import { AuroraBackground } from "./aurora-background";
import { CoreTechnologies } from "./core-technologies";
import { FAQs } from "./faqs";
import { Hero } from "./hero";
import { WhyChooseUs } from "./why-choose-us";

export const Content = () => (
  <section className="flex h-auto w-full max-w-(--breakpoint-2xl) flex-col items-center gap-20 p-4 py-8">
    <Hero />
    <AboutUs />
    <CoreTechnologies />
    <WhyChooseUs />
    <FAQs />
    <AuroraBackground />
  </section>
);
