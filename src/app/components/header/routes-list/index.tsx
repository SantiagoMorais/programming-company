"use client";

import { SheetClose } from "@/components/ui/sheet";
import {
  ICursorPosition,
  IRouteItemProps,
  IRoutesListProps,
} from "@/core/interfaces/routes-list-props";
import { navBarRoutes } from "@/utils/routes";
import { motion, TargetAndTransition } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const RoutesList = ({ insideASheet, className }: IRoutesListProps) => {
  const [position, setPosition] = useState<ICursorPosition>({
    top: 0,
    left: 0,
    width: 0,
    opacity: 0,
    height: 0,
  });

  const handleOnMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <ul
      onMouseLeave={handleOnMouseLeave}
      className={twMerge(
        "relative flex flex-col items-center gap-4 pt-8 md:mx-auto md:flex-row md:justify-center md:gap-0 md:pt-0",
        className
      )}
    >
      {navBarRoutes.map((route) => (
        <RouteItem
          key={route.title}
          route={route}
          setPosition={setPosition}
          insideASheet={insideASheet}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

export const RouteItem = ({
  route,
  setPosition,
  insideASheet,
}: IRouteItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const handleOnMouseEnter = () => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
      top: ref.current.offsetTop, // the relative position to the father element
      height,
    });
  };

  const link = (
    <a
      href={route.path}
      className={`inline-block px-3 py-1.5 ${insideASheet ? "text-xl" : "text-base"}`}
    >
      {route.title}
    </a>
  );

  return (
    <li
      ref={ref}
      onMouseEnter={handleOnMouseEnter}
      key={route.title}
      className="relative z-10 block w-fit px-4 text-white mix-blend-difference"
    >
      {insideASheet ? <SheetClose className="">{link}</SheetClose> : link}
    </li>
  );
};

export const Cursor = ({ position }: { position: ICursorPosition }) => (
  <motion.li
    animate={position as TargetAndTransition}
    className="absolute z-0 rounded-xl bg-muted"
  />
);
