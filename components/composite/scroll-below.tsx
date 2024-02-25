"use client";
import { motion } from "framer-motion";
import Arrow from "../svg/arrow";

const ScrollBelow = () => {
  return (
    <div className="relative bg-foreground rounded-full p-[2px] overflow-hidden">
      <div className="relative bg-background rounded-full flex items-center justify-center w-10 h-20">
        <motion.div
          transition={{
            repeat: Infinity,
            repeatDelay: 4,
            duration: 1,
            ease: "circInOut",
            delay: 2,
          }}
          animate={{ y: [0, 10, -2, 0] }}
        >
          <Arrow />
        </motion.div>
      </div>
      <motion.div
        transition={{
          repeat: Infinity,
          repeatDelay: 4,
          duration: 1,
          ease: "circInOut",
          delay: 1.7,
        }}
        animate={{ y: [-200, 0], x: ["-50%"] }}
        className="absolute w-full h-full left-1/2 bg-gradient-to-b from-transparent via-accent to-transparent"
      ></motion.div>
    </div>
  );
};

export default ScrollBelow;
