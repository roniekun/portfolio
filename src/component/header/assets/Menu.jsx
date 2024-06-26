import React from "react";
import { useContext, useRef, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import gsap from "gsap";
import { letters } from "../../../utils/letters";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const { setToggleMenu, isToggleMenu, textColorPrimary, borderColor } =
    useContext(DataContext);
  const btn = useRef(null);
  const [isDisabled, setDisabled] = useState();

  useEffect(() => {
    let interval = null;
    let iteration = 0;
    const initialContent = isToggleMenu ? "CLOSE " : "MENUS";
    clearInterval(interval);
    interval = setInterval(() => {
      btn.current.textContent = btn.current.textContent
        .split("")
        .map((_, idx) => {
          if (idx < iteration) {
            return initialContent[idx];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= btn.current.textContent.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 100);
  }, [isToggleMenu]);

  useEffect(() => {
    if (isToggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isToggleMenu]);

  const handleClick = () => {
    setDisabled(true);
    setToggleMenu(!isToggleMenu);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };
  const handleMouseEvent = (event) => {
    let interval = null;
    let iteration = 0;
    clearInterval(interval);
    const initialContent = isToggleMenu ? "CLOSE " : "MENUS";
    interval = setInterval(() => {
      btn.current.textContent = btn.current.textContent
        .split("")
        .map((_, idx) => {
          if (idx < iteration) {
            return initialContent[idx];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= btn.current.textContent.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${borderColor}  group transition flex items-center  justify-center uppercase  relative  px-8 w-14
                mx-[5vw] -z-10 rounded-lg ${
                  isToggleMenu && `${textColorPrimary}  bg-opacity-20`
                }`}
      >
        {isToggleMenu ? (
          <button
            className="bg-blend-difference"
            ref={btn}
            disabled={isDisabled}
            onMouseEnter={handleMouseEvent}
            onMouseLeave={handleMouseEvent}
            onClick={handleClick}
          >
            CLOSE
          </button>
        ) : (
          <button
            onMouseEnter={handleMouseEvent}
            onMouseLeave={handleMouseEvent}
            onClick={handleClick}
            ref={btn}
          >
            MENU
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
