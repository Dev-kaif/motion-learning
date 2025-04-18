'use client';

import { motion,useScroll, useTransform } from "motion/react";

export default function Page() {
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY,[0,100],[1,0.5])
    const borderRadius = useTransform(scrollY,[0,100],["0%","50%"])

  return (
    <div className="h-[120vh]">
      <motion.img
      style={{scale,borderRadius}}
        className="absolute w-full h-full object-cover inset-0"
        src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background-image"
      />
      <div className="sticky top-0 h-screen items-center justify-center flex ">
        <h1 className="text-4xl"> Scroll To Animate</h1>
      </div>
    </div>
  );
}
