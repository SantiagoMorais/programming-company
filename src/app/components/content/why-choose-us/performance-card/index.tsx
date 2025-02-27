import { WhyChooseUsTemplateCard } from "@/components/why-choose-us-template-card";
import { performanceCardContent } from "@/utils/performance-card-content";

import { ChildrenContent } from "./children-content";

export const PerformanceCard = () => (
  <WhyChooseUsTemplateCard
    title={performanceCardContent.title}
    subtitle={performanceCardContent.subtitle}
    content={performanceCardContent.features}
    className="py-10"
  >
    <ChildrenContent />
  </WhyChooseUsTemplateCard>
);
