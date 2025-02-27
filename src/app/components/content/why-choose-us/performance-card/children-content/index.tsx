"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Loader } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import manProfilePhoto from "@/assets/why-choose-us-section/profile-photo-man.jpg";
import womanProfilePhoto from "@/assets/why-choose-us-section/profile-photo-woman.jpg";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeletonContent = () => (
  <div className="flex w-full flex-col items-center gap-4 md:flex-row">
    <Skeleton className="bg-muted-foreground size-12 min-h-12 min-w-12 rounded-full sm:size-16 sm:min-h-16 sm:min-w-16" />
    <div className="flex w-full flex-col items-center gap-2 sm:items-start sm:gap-3">
      <Skeleton className="bg-muted-foreground h-6 w-full sm:w-60 md:w-80" />
      <Skeleton className="bg-muted-foreground h-6 w-4/5 sm:w-50 md:w-60" />
    </div>
  </div>
);

const LoadedSkeletonContent = ({
  photo,
  name,
  title,
}: {
  photo: StaticImageData;
  name: string;
  title: string;
}) => (
  <div className="flex flex-col items-center gap-4 space-x-4 sm:flex-row">
    <div className="shadow-secondary border-primary relative size-12 min-h-12 min-w-12 rounded-full border-2 sm:size-16 sm:min-h-16 sm:min-w-16">
      <Image src={photo} alt="foto de perfil" fill className="rounded-full" />
    </div>
    <div className="flex w-full flex-col items-center gap-2 sm:items-start sm:gap-3">
      <div className="bg-muted-foreground/30 flex h-6 w-full min-w-0 items-center justify-center rounded-md px-2 sm:w-60 sm:justify-start md:w-80">
        <p className="truncate text-center text-sm font-semibold text-ellipsis sm:text-start sm:text-base">
          {name}
        </p>
      </div>
      <div className="bg-background/50 flex h-6 w-4/5 max-w-4/5 min-w-0 items-center justify-center overflow-hidden rounded-md px-2 sm:w-50 sm:justify-start md:w-60">
        <p className="text-muted-foreground truncate text-center text-sm text-ellipsis sm:text-start sm:text-base">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export const ChildrenContent = () => {
  const [mousePosition, setMousePosition] = useState<"in" | "out">("out");
  const handleOnMouseEnter = () => setMousePosition("in");

  return (
    <section
      className="flex h-full w-full flex-1 flex-col items-center gap-6"
      onMouseEnter={() => handleOnMouseEnter()}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={mousePosition}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          exit={{ rotate: 90, opacity: 0 }}
        >
          {mousePosition === "out" ? (
            <Loader className="animate-custom-rotate text-primary size-8" />
          ) : (
            <CircleCheck className="text-secondary size-8" />
          )}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={mousePosition}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full space-y-6"
        >
          {mousePosition === "out" ? (
            <>
              <LoadingSkeletonContent />
              <LoadingSkeletonContent />
            </>
          ) : (
            <>
              <LoadedSkeletonContent
                photo={manProfilePhoto}
                name="Rafael Henrique Souza"
                title="Designer UI/UX"
              />
              <LoadedSkeletonContent
                photo={womanProfilePhoto}
                name="Amanda Beatriz Oliveira"
                title="Desenvolvedora FullStack"
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
