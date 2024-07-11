import React from "react";
import Menu from "./assets/Menu";
import { useLocation } from "react-router-dom";
import {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "./assets/Logo";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../navbar";
import Nav from "./assets/Nav3";
import { ThemeContext } from "../../context/ThemeContext";
import gsap from "gsap";

const Header = () => {
  const { isMobile, setToggleMenu, isToggleMenu, isLoading } =
    useContext(DataContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const {
    isLoadedTheme,
    theme: { bg, textColorPrimary },
    loadedTheme: { loadedBg, loadedTextColor },
  } = useContext(ThemeContext);

  // refs
  const header = useRef(null);
  const nav = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
      return () => {
        setIsScrolled(false);
        console.log(isScrolled);
      };
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  }, [isLoadedTheme, isScrolled]);

  return (
    <main>
      {!isLoading && (
        <motion.header
        style={{color: textColorPrimary}}
          ref={header}
          className={`bg-transparent  z-40 overflow-hidden transtion flex justify-center items-center  h-[56px] w-full duration-300 transition top-0 fixed`}
        >
          <section
            className={`flex relative  justify-between lg:justify-center px-[5vw] items-center  z-0 w-full text-base font-secondary font-semibold`}
          >
            <h1 className="uppercase">Roniecode</h1>
            {isMobile && <Menu />}
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
