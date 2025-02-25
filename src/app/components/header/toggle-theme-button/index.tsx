"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export const ToggleThemeButton = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("local-theme") as Theme | null;
    return storedTheme ?? "light";
  });

  useEffect(() => {
    localStorage.setItem("local-theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Button variant="ghost" onClick={toggleTheme}>
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: .8 }}
        animate={{ rotate: 0, scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </motion.div>
    </Button>
  );
};
