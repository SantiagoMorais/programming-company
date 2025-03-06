import { WhyChooseUsTemplateCard } from "@/components/why-choose-us-template-card";
import { customizableCardContent } from "@/utils/customizable-card-content";

import { ChildrenContent } from "./children-content";

export const CustomizableCard = () => (
  <WhyChooseUsTemplateCard
    title={customizableCardContent.title}
    subtitle={customizableCardContent.subtitle}
    content={customizableCardContent.features}
    reverseContent
  >
    <ChildrenContent />
  </WhyChooseUsTemplateCard>
);
