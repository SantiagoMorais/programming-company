import { WhyChooseUsTemplateCard } from "@/components/why-choose-us-template-card";
import { responsiveDesignCardContent } from "@/utils/responsive-design-card-content";

import { ChildrenContent } from "./children-content";

export const ResponsiveDesignCard = () => (
  <WhyChooseUsTemplateCard
    title={responsiveDesignCardContent.title}
    content={responsiveDesignCardContent.features}
    subtitle={responsiveDesignCardContent.subtitle}
    reverseContent
  >
    <ChildrenContent />
  </WhyChooseUsTemplateCard>
);
