import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

export default function PageTransition({ children }) {
  const location = useLocation();
  const { isLoading } = useContext(DataContext);

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
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const slide = {
    start: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    leave: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],        ease: [0.76, 0, 0.24, 1],

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
    <motion.main>
      <motion.div
        className="bg-red-500 h-screen w-screen absolute z-10"
        {...anim(slide)}
      />
      {children}
    </motion.main>
  );
}
