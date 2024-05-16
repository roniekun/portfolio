import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { DataContext } from "../../context/DataContext";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const { isTransition } = useContext(DataContext);
  const location = useLocation();

  const anim = (variants) => {
    return {
      initial: "start",
      animate: "enter",
      exit: "leave",
      variants,
    };
  };

  const opacity = {
    start: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    leave: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const slideEnter = {
    start: {
      top: "0",
    },
    enter: {
      top: "-100vh",
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    leave: {
      opacity: 1,
      top: "0vh",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const slideExit = {
    start: {
      top: "0",
    },
    enter: {
      top: "-100vh",
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    leave: {
      opacity: 1,
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    start: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    leave: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <main>
      <div className="bg-black">
        <motion.div className="opacity-0" {...anim(opacity)}>
          {children}
        </motion.div>
      </div>
    </main>
  );
}
