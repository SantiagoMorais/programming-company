"use client";

import { LaptopMinimal, LaptopMinimalCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import hygraphLogo from "@/assets/icons/hygraph.png";
import { Progress } from "@/components/ui/progress";

export const ChildrenContent = () => {
  const [progressValue, setProgressValue] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const maxProgressValue = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top, bottom, height } =
        sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const twentyPercentOfViewportHeight = viewportHeight * 0.2;

      const isPartiallyVisible = top < viewportHeight && bottom > 0;

      if (!isPartiallyVisible) return;

      const newProgressValue =
        top <= twentyPercentOfViewportHeight
          ? 100
          : Math.max(
              0,
              Math.min(100, 100 - (top / (viewportHeight - height)) * 100)
            );

      if (newProgressValue > maxProgressValue.current) {
        maxProgressValue.current = newProgressValue;
        setProgressValue(newProgressValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
