import Image from "next/image";
import { useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ICursorPosition } from "@/core/interfaces/components/routes-list-props";
import { ITechnologyCard } from "@/utils/technology-cards";

type ITechnologyCardProps = {
  card: ITechnologyCard;
  setPosition: React.Dispatch<React.SetStateAction<ICursorPosition>>;
};

export const TechnologyCard = ({ card, setPosition }: ITechnologyCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
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

  return (
    <Card
      className="bg-background z-10 h-full w-full min-w-52 flex-1 gap-2 select-none md:max-w-80"
      ref={ref}
      onMouseEnter={handleOnMouseEnter}
    >
      <CardHeader>
        <div className="bg-muted/50 relative mb-4 size-12 rounded-lg">
          <Image
            src={card.image}
            fill
            alt={card.title}
            className="object-contain p-2.5"
          />
        </div>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-base">{card.content}</p>
      </CardContent>
    </Card>
  );
};
