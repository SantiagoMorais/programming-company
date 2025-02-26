"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const letter = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const Hero = () => (
  <section className="flex min-h-[50dvh] w-full flex-col items-center justify-center gap-10">
    <motion.h2
      className="text-center text-4xl"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      <motion.strong className="from-secondary to-primary bg-linear-to-r bg-clip-text text-transparent">
        {"Do código ao impacto:".split("").map((char, index) => (
          <motion.span key={`strong-${index}`} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.strong>
      <br />
      {"construímos o futuro do seu negócio.".split("").map((char, index) => (
        <motion.span key={`text-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-muted-foreground max-w-4/5 text-center text-xl"
    >
      Desenvolvimento de sites e aplicações com visão estratégica. Comece agora
      e expanda para novas oportunidades.
    </motion.h3>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex w-full flex-wrap justify-center gap-4"
    >
      <Button className="md:px-5 md:py-8 md:text-xl">Entre em contato</Button>
      <Button variant="outline" className="md:px-5 md:py-8 md:text-xl">
        Sobre nós
      </Button>
    </motion.div>
  </section>
);
