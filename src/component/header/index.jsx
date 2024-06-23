import React from "react";
import Menu from "./assets/Menu";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "./assets/Logo";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../navbar";
import Nav from "./assets/Nav";

const Header = () => {
  const {
    isMobile,
    isScrolled,
    isToggleMenu,
    isLoading,
    textColorPrimary,
    bg,
  } = useContext(DataContext);
  const location = useLocation();
  // refs
  const header = useRef(null);
  const nav = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    if (isToggleMenu) {
      controls.start({
        height: "auto",
        opacity: 1,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
      });
    } else {
      controls.start({
        height: 0,
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
      });
    }
  }, [isToggleMenu, controls]);

  return (
    <main>
      {!isLoading && (
        <motion.header
          ref={header}
          className={`${textColorPrimary} md:mt-5 mt-3 fixed shadow-inner  z-20 overflow-hidden transtion duration-700 transition-all  bg-blend-difference  transform rounded-xl left-1/2  -translate-x-1/2 lg:w-4/5 w-11/12
      ${
        isToggleMenu ? `${bg} bg-opacity-40 backdrop-blur-md` : "bg-transparent"
      }`}
        >
            <section
              className={`flex relative  justify-between  items-center  md:h-12 h-[12vw]  z-0`}
            >
              <div>
                <Logo />
              </div>
              {isMobile ? <Menu /> : <Nav />}
            </section>

          <motion.section className="relative flex h-0" animate={controls}>
            {isMobile && <Navbar />}
          </motion.section>
        </motion.header>
      )}
    </main>
  );
};

export default Header;
