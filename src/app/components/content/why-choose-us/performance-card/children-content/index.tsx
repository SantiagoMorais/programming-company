"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Loader } from "lucide-react";
import { useState } from "react";

import manProfilePhoto from "@/assets/why-choose-us-section/profile-photo-man.jpg";
import womanProfilePhoto from "@/assets/why-choose-us-section/profile-photo-woman.jpg";

import {
  LoadingSkeletonContent,
  UploadedSkeletonContent,
} from "./skeleton-content";

export const ChildrenContent = () => {
  const [mousePosition, setMousePosition] = useState<"in" | "out">("out");
  const handleOnMouseEnter = () => setMousePosition("in");

  const content = () => {
    if (mousePosition === "out")
      return (
        <>
          <LoadingSkeletonContent />
          <LoadingSkeletonContent />
        </>
      );
    return (
      <>
        <UploadedSkeletonContent
          photo={manProfilePhoto}
          name="Rafael Henrique Souza"
          position="Designer UI/UX"
        />
        <UploadedSkeletonContent
          photo={womanProfilePhoto}
          name="Amanda Beatriz Oliveira"
          position="Desenvolvedora FullStack"
        />
      </>
    );
  };

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
          className="flex w-full flex-col items-center gap-6"
        >
          {content()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
