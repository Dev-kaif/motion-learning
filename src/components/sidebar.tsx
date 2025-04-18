import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "motion/react";

const Sidebar = () => {
    
  const variant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const [clicked, setClicked] = useState(false);
  return (
    <div className="h-screen">
      <span
        onClick={() => setClicked((prev) => !prev)}
        className="text-4xl fixed z-50"
      >
        <IoMenu />
      </span>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={clicked ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 0.3 }}
        className="absolute inset-0 h-full w-64 bg-purple-600"
      ></motion.div>
    </div>
  );
};

export default Sidebar;
