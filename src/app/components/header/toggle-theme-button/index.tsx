"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToggleThemeContext } from "@/contexts/theme-toggler-context";

export const ToggleThemeButton = () => {
  const { handleToggleTheme, theme } = useToggleThemeContext();

  return (
    <Button variant="ghost" onClick={handleToggleTheme}>
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </motion.div>
    </Button>
  );
};
