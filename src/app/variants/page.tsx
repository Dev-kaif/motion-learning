"use client";
import { motion } from "motion/react";
import { useState } from "react";

const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8, y: 50 },
};

export default function Page() {
  const [showBox, setShowBox] = useState(true);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-10 ">
      <button
        className="bg-blue-500 px-3 py-1 rounded-full"
        onClick={() => setShowBox((prev) => !prev)}
      >
        {showBox ? "Hide Box" : "Show Box"}
      </button>

      <motion.div
        key="box"
        className="rounded-2xl bg-teal-500 w-32 h-32"
        variants={boxVariants}
        initial="hidden"
        animate={showBox ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
