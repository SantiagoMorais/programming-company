"use client";
import { useState } from "react";

import { Cursor } from "@/app/components/header/routes-list/cursor";
import { ICursorPosition } from "@/core/interfaces/routes-list-props";
import { technologyCards } from "@/utils/technology-cards";

import { TechnologyCard } from "./card";

export const CardsList = () => {
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
      className="grid w-fit items-center justify-center gap-8 px-4 sm:grid-cols-2 md:grid-cols-3"
      onMouseLeave={handleOnMouseLeave}
    >
      <Cursor
        position={position}
        className="bg-muted/60 scale-x-105 scale-y-110 sm:scale-110"
      />
      {technologyCards.map((card) => (
        <TechnologyCard
          key={card.title}
          card={card}
          setPosition={setPosition}
        />
      ))}
    </ul>
  );
};
