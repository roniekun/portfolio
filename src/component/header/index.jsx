import React from "react";
import Menu from "./assets/Menu";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "./assets/Logo";
import { motion } from "framer-motion";
import Navbar from "../navbar";
import Nav from "./assets/Nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const { isMobile, isScrolled, isToggleMenu, isLoading, isTransition } =
    useContext(DataContext);
  const location = useLocation();
  // refs
  const header = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    if (isToggleMenu) {
      gsap.to(nav.current, { height: "auto", ease: "power4.inOut" });
      gsap.fromTo(
        nav.current,
        { duration: 0.5, delay: 1, y: -5, ease: "power4.inOut" },
        { delay: 0.3, y: 0, opacity: 1 }
      );
    } else {
      gsap.to(nav.current, {
        height: 0,
        opacity: 0,
        ease: "power4.inOut",
        duration: 0.7,
      });
    }
  }, [isToggleMenu, isMobile]);

  // useGSAP(
  //   () => {
  //     if (isScrolled) {
  //       gsap.to(header.current, { y: -10, duration: 0.3 });
  //       setTimeout(() => {
  //         header.current.style.display = "none";
  //       }, 100);
  //     } else {
  //       gsap.to(header.current, { y: 0, duration: 0.3 });
  //       setTimeout(() => {
  //         header.current.style.display = "block";
  //       }, 100);
  //     }
  //   },
  //   { dependencies: [isScrolled] }
  // );

  return (
    <main>
      {!isLoading  && 
        <motion.header
          ref={header}
          className={`md:mt-5 mt-3 fixed shadow-inner   z-20 overflow-hidden transtion duration-300 transition-all
           text-white bg-blend-difference  rounded-3xl transform left-1/2  w-11/12 -translate-x-1/2
      ${
        isToggleMenu
          ? "bg-black bg-opacity-20 backdrop-blur-md"
          : "bg-transparent"
      }`}
        >
          <section className="flex flex-col">
            <div
              className={`flex relative  justify-between  items-center  md:h-12 h-[12vw]  z-0 `}
            >
              <div>
                <Logo />
              </div>
              {isMobile ? <Menu /> : <Nav />}
            </div>
          </section>

          <section className="relative flex h-0" ref={nav}>
            {isMobile && <Navbar />}
          </section>
        </motion.header>
      }
    </main>
  );
};

export default Header;
