import { CustomizableCard } from "./customizable-card";
import { Header } from "./header";
import { PerformanceCard } from "./performance-card";
import { ResponsiveDesignCard } from "./responsive-design-card";

export const WhyChooseUs = ({ id }: { id: string }) => (
  <section id={id} className="w-full max-w-(--breakpoint-xl) space-y-8">
    <Header />
    <ResponsiveDesignCard />
    <PerformanceCard />
    <CustomizableCard />
  </section>
);
