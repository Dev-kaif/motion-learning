import * as motion from "motion/react-client";

export default function Page() {
  return (
    <div className="flex space-x-2 h-screen justify-center items-center">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-teal-500 w-8 h-8 rounded-full "
          animate={{
            y: [0, 10, -10, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: index * 0.2,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
}
