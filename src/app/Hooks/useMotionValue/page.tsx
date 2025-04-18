"use client";
import { useMotionValue, useSpring } from "motion/react";
import { motion } from "motion/react";
import { ChangeEvent } from "react";

export default function Page() {
  const scale = useMotionValue(1);
  const scale2 = useSpring(1);

  const onChnageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const rangeValue = Number(event.target.value);
    scale.set(rangeValue);
    scale2.set(rangeValue);
  };

  return (
    <div className="flex space-x-2 h-screen justify-center items-center flex-col gap-10 overflow-hidden">
      <div className="flex gap-64">
        <div className="flex flex-col gap-2 items-center">
          <div>useMotionValue</div>
          <motion.div style={{ scale }} className="box rounded-full" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div>useSpring</div>
          <motion.div style={{ scale: scale2 }} className="box rounded-full" />
        </div>
      </div>
      <input
        type="range"
        max={4}
        min={0.5}
        defaultValue={1}
        onChange={(e) => onChnageHandler(e)}
      />
    </div>
  );
}
