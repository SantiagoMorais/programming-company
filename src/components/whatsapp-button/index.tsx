import Image from "next/image";

import whatsAppIcon from "@/assets/icons/WhatsApp-icon.png";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { whatsAppLink } from "@/utils/whatsApp";

export const WhatsAppButton = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="fixed right-5 bottom-5 z-50 size-fit rounded-full opacity-60 md:right-10 md:bottom-10"
          size="icon"
          variant="secondary"
          asChild
        >
          <a href={whatsAppLink} className="p-3" target="_blank">
            <div className="relative size-10">
              <Image
                fill
                src={whatsAppIcon}
                alt="Ícone WhatsApp"
                className="invert"
              />
            </div>
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
