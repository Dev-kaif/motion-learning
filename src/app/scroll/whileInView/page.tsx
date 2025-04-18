import * as motion from "motion/react-client";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="h-screen flex items-center justify-center">
        Scroll to animate
      </div>
      <div className="min-h-screen flex items-center justify-center flex-col gap-20 mb-40">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="box flex items-center justify-center text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn"}}
          >
            Box {index + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
