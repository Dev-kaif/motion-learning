import * as motion from 'motion/react-client';

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,     // Delay between children
        delayChildren: 0.5        // Initial delay before starting
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  export default function Page() {
    return (
      <motion.div
        className="flex space-x-2 h-screen justify-center items-center"
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(5)].map((_,index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className="bg-teal-500 w-8 h-8 rounded-full "
          />
        ))}
      </motion.div>
    );
  }