import { Header } from "./header";
import { PerformanceCard } from "./performance-card";
import { ResponsiveDesignCard } from "./responsive-design-card";

export const WhyChooseUs = () => (
  <section className="w-full max-w-(--breakpoint-xl) space-y-8">
    <Header />
    <ResponsiveDesignCard />
    <PerformanceCard />
  </section>
);
