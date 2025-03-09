"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import logo from "@/assets/logo.png";
import { Separator } from "@/components/ui/separator";
import { ILogoProps } from "@/core/interfaces/logo-props";

export const Logo = ({ invert, imageClassName, textClassName }: ILogoProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDarkMode = document.body.className.includes("dark");
      setDarkMode(isDarkMode);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const initialDarkMode = document.body.className.includes("dark");
    setDarkMode(initialDarkMode);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`flex items-center select-none md:flex-row ${invert ? "flex-col gap-0" : "gap-2"}`}
    >
      <div
        className={twMerge(
          `relative size-12 ${invert && "mb-1.5"}`,
          imageClassName
        )}
      >
        <Image
          src={logo}
          fill
          alt="logo"
          className={`object-contain duration-0 ${darkMode && "invert"}`}
        />
      </div>
      <Separator className={`bg-foreground ${!invert && "hidden"}`} />
      <h1
        className={twMerge(
          "font-family-cactus-classical text-2xl tracking-widest uppercase duration-0",
          textClassName
        )}
      >
        Principia
      </h1>
    </section>
  );
};
