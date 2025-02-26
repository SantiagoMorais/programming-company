"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

export const ToggleThemeButton = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("local-theme") as Theme | null;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("local-theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
