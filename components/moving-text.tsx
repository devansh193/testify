"use client";

import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MovingTextProps {
  text1: string;
  text2: string;
  speed?: number;
}
export const MovingText: React.FC<MovingTextProps> = ({
  text1,
  text2,
  speed = 60,
}) => {
  return (
    <div className="overflow-hidden py-8">
      <Link href={"/sign-in"}>
        <motion.div
          className="text-4xl font-bold text-black whitespace-nowrap"
          animate={{
            x: [0, -2000],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          aria-hidden="true"
        >
          {text1.repeat(20)}
        </motion.div>
      </Link>
      <Link href={"/sign-in"}>
        <motion.div
          className="text-4xl font-bold text-black whitespace-nowrap mt-4"
          animate={{
            x: [-2000, 0],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          aria-hidden="true"
        >
          {text2.repeat(20)}
        </motion.div>
      </Link>
      <div className="sr-only">
        {text1} {text2}
      </div>
    </div>
  );
};
