"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

export interface IThemeTogglerContext {
  theme: Theme;
  handleToggleTheme: () => void;
}

export const ThemeTogglerContext = createContext<IThemeTogglerContext>({
  theme: "light",
  handleToggleTheme: () => {},
});

export const ThemeTogglerProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("local-theme") as Theme | null;
    return storedTheme ?? "light";
  });

  useEffect(() => {
    localStorage.setItem("local-theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeTogglerContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

export const useToggleThemeContext = () => {
  const context = useContext(ThemeTogglerContext);

  if (!context)
    throw new Error(
      "ThemeTogglerContext must be wrapped by a ThemeTogglerProvider"
    );

  return context;
};
