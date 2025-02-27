import { FaqsContent } from "./faqs-content";

export const FAQs = () => (
  <section className="flex flex-col gap-8 px-4">
    <h3 className="z-10 text-center text-3xl font-semibold md:text-4xl">
      Perguntas Frequentes
    </h3>
    <FaqsContent />
  </section>
);
