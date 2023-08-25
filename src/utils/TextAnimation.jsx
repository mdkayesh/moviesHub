import React from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }) => {
  const textArr = text.split(" ");

  const containerVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const childVarients = {
    hidden: {
      opacity: 0,
      y: 30,
      x: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };

  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="flex gap-2 flex-wrap">
        {textArr.map((text, index) => (
          <motion.span variants={childVarients} key={index}>
            {text}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default TextAnimation;
