"use client";

import { LaptopMinimal, LaptopMinimalCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import hygraphLogo from "@/assets/icons/hygraph.png";
import { Progress } from "@/components/ui/progress";

export const ChildrenContent = () => {
  const [progressValue, setProgressValue] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom, height } =
          sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const twentyPercentOfViewportHeigh = (viewportHeight / 100) * 20;

        const isPartiallyVisible = top < viewportHeight && bottom > 0;

        if (isPartiallyVisible) {
          if (
            top <= twentyPercentOfViewportHeigh
            /* to ensure the header won't cover the element */
          ) {
            // if the top of the element be above the viewport, the value keeps 100%
            setProgressValue(100);
          } else {
            // Calculate the progress by the top value
            const maxTop = viewportHeight - height; // Position when it's in the base
            const progress = 100 - (top / maxTop) * 100;
            setProgressValue(Math.max(0, Math.min(100, progress)));
          }
        } else {
          // If the element is not visible, the progress is zero
          setProgressValue(0);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-2"
    >
      <div className="bg-accent border-accent-foreground flex w-full max-w-100 items-center gap-4 rounded-lg border-2 px-2 md:px-4">
        <div className="bg-primary/80 relative size-12 min-h-12 min-w-12 rounded-full md:size-16 md:min-h-16 md:min-w-16">
          <Image
            src={hygraphLogo}
            fill
            alt="Logo Hygraph"
            className="object-contain p-1 invert"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <p className="font-semibold">{progressValue.toFixed()}%</p>
          <Progress value={progressValue} className="w-full max-w-60 md:h-3" />
        </div>
        <div className="relative size-20 md:size-28">
          <LaptopMinimalCheck
            className={`text-secondary absolute size-full duration-300 ${progressValue !== 100 && "opacity-0"}`}
          />

          <LaptopMinimal
            className={`size-full duration-300 ${progressValue === 100 && "opacity-0"}`}
          />
        </div>
      </div>
    </section>
  );
};
