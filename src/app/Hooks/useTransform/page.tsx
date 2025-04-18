"use client";
import { useMotionValue, useTransform, motion } from "motion/react";

export default function Page() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ["#fc8e45", "#ed45fc"]);
  const scale = useTransform(y, [-100, 100], [0.8, 1.2]);

  return (
    <div className="h-screen flex justify-center items-center ">
      <motion.div
        dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
        drag
        style={{ x, y, backgroundColor, scale }}
        className="cursor-grabbing px-3 py-1 rounded-full"
      >
        <span>Drag Me</span>
      </motion.div>
    </div>
  );
}
