"use client";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { faqs } from "@/utils/faqs";

export const FaqsContent = () => {
  const [faqSelected, setFaqSelected] = useState<string>("");

  const isFaqSelected = (faq: string): boolean => {
    return faqSelected === faq;
  };

  const handleOpenFAQ = (faq: string) => {
    if (faqSelected === faq) return setFaqSelected("");
    return setFaqSelected(faq);
  };

  return (
    <ul className="flex max-w-full min-w-0 flex-1 flex-col px-4 md:max-w-(--breakpoint-md)">
      {faqs.map((faq, index) => (
        <li
          key={faq.question}
          className="w-full cursor-pointer last:mb-0"
          onClick={() => handleOpenFAQ(faq.question)}
        >
          <Button
            variant="ghost"
            className="flex h-fit w-full justify-between gap-4"
          >
            <h3
              className={`text-start text-wrap duration-500 ${isFaqSelected(faq.question) && "text-primary"}`}
            >
              {faq.question}
            </h3>
            <ChevronUp
              className={`scale-125 duration-500 ${isFaqSelected(faq.question) && "bg-primary text-background rotate-180 rounded-full"}`}
            />
          </Button>
          <Collapse isOpened={isFaqSelected(faq.question)}>
            <p className="text-muted-foreground p-4 text-sm md:text-base">{faq.answer}</p>
          </Collapse>
          {index !== faqs.length - 1 && <Separator className="my-2" />}
        </li>
      ))}
    </ul>
  );
};
