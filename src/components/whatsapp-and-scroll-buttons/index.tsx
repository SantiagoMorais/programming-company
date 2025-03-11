import { ScrollToTopButton } from "./scroll-to-top-button/scroll-to-top-button";
import { WhatsAppButton } from "./whatsapp-button";

export const WhatsAppAndScrollButtons = () => (
  <div className="fixed right-5 bottom-5 z-50 flex flex-col items-center gap-2 md:right-10 md:bottom-10">
    <ScrollToTopButton />
    <WhatsAppButton />
  </div>
);
