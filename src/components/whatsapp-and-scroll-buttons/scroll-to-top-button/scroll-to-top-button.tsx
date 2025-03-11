"use client";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ScrollToTopButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full p-4 opacity-60"
            size="icon"
            onClick={handleScroll}
          >
            <ArrowUp className="scale-150 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Voltar ao topo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
