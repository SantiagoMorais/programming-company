"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export const VisitWebsiteComponent = ({
  projectUrl,
}: {
  projectUrl: string;
}) => {
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const handleMousePosition = (mouseIn: boolean) => {
    setIsMouseIn(mouseIn);
  };

  return (
    <div
      className={`group absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center opacity-0 duration-300 ${isMouseIn && "opacity-100 backdrop-blur-xs"}`}
      onMouseEnter={() => handleMousePosition(true)}
      onMouseLeave={() => handleMousePosition(false)}
    >
      <Button
        asChild
        variant="outline"
        className="hover:border-secondary hover:text-secondary border-2 border-transparent duration-300 hover:opacity-80"
      >
        <a
          href={projectUrl}
          target="_blank"
          onClick={(e) => {
            if (!isMouseIn) e.preventDefault();
          }}
          className={`text-xl font-normal ${isMouseIn && "hidden"}`}
        >
          Visitar Site
        </a>
      </Button>
    </div>
  );
};
