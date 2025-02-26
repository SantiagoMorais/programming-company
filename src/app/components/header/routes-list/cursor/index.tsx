import { motion, TargetAndTransition } from "framer-motion";

import { ICursorPosition } from "@/core/interfaces/routes-list-props";

export const Cursor = ({ position }: { position: ICursorPosition }) => (
  <motion.li
    animate={position as TargetAndTransition}
    className="bg-muted absolute z-0 rounded-xl"
  />
);
