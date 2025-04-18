import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "motion/react";

export default function Modal() {
    
  const variant = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
  };

  const background = {
    hidden: { opacity: 0.8 },
    visible: { opacity: 1 },
  };

  const [clicked, setClicked] = useState(false);

  return (
    <>
      {/* Toggel Button */}
      <span
        onClick={() => setClicked((prev) => !prev)}
        className="text-black text-4xl fixed top-0 z-50"
      >
        <IoMenu />
      </span>

      {/* Modal */}
      <motion.div
        variants={variant}
        initial={"hidden"}
        animate={clicked ? "visible" : "hidden"}
        exit={"exit"}
        transition={{ duration: 0.3 }}
        className="bg-purple-700 h-1/2 w-full absolute inset-0 z-30"
      ></motion.div>

      {/* Background */}
      <motion.div
        variants={background}
        animate={clicked ? "hidden" : "visible"}
        className={`bg-zinc-200 h-screen`}
      ></motion.div>
    </>
  );
}
