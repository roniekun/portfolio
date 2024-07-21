import React from "react";
import Menu from "./assets/Menu";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useContext, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import gsap from "gsap";

const Header = () => {
  const { isDesktop, isToggleMenu, isLoading } = useContext(DataContext);

  const {
    isScrolled,
    isLoadedTheme,
    theme: { bg, textColorPrimary },
    loadedTheme: { loadedBg, loadedTextColor },
  } = useContext(ThemeContext);

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

  useLayoutEffect(() => {
    gsap.to(header.current, {
      backgroundColor: isScrolled
        ? isLoadedTheme
          ? loadedBg
          : bg
        : "transparent",
      color: isScrolled
        ? isLoadedTheme
          ? loadedTextColor
          : textColorPrimary
        : textColorPrimary,
      duration: 0,
    });
  }, [
    isLoadedTheme,
    loadedBg,
    isScrolled,
    bg,
    loadedTextColor,
    textColorPrimary,
  ]);

  return (
    <main>
      {!isLoading && (
        <motion.header
          style={{ color: textColorPrimary }}
          ref={header}
          className={`${
            isScrolled && "shadow-sm"
          } bg-transparent  z-40 overflow-hidden transtion flex justify-center items-center  h-[56px] w-full duration-300 transition top-0 fixed`}
        >
          <section
            className={`flex relative  justify-between  px-[5vw] items-center  z-0 w-full text-base font-secondary font-semibold`}
          >
            {isDesktop && (
              <Link
                to="/contact"
                className="font-primary font-medium uppercase  text-xs"
              >
                Work with us
              </Link>
            )}

            <Link to="/" className="uppercase">
              Roniecode
            </Link>
            <Menu />
          </section>

          <motion.section
            className="relative flex h-0"
            animate={controls}
          ></motion.section>
        </motion.header>
      )}
    </main>
  );
};

export default Header;
