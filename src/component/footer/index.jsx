import React, { forwardRef } from "react";
import SendGmail from "../../assets/SendGmail";
import { useContext, useState, useLayoutEffect, useRef } from "react";
import Socials from "./assets/Socials";
import { DataContext } from "../../context/DataContext";
import { ThemeContext } from "../../context/ThemeContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Footer = forwardRef((props, ref) => {
  const { user } = useContext(DataContext);
  const { loadThemeFn, setIsLoadedTheme } = useContext(ThemeContext);
  const date = new Date();
  const targetRef = useRef(null);

  const handleClick = (user) => {
    SendGmail(user);
  };
  const theme = {
    loadedBg: "#0C0A09",
    loadedTextColor: "whitesmoke",
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: targetRef.current,
      start: "bottom-=10px bottom",
      end: "bottom-=5px bottom",

      onEnter: () => {
        loadThemeFn(theme);
      },

      onLeave: () => {
        loadThemeFn(theme);
      },
      onEnterBack: () => {
        loadThemeFn(theme);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <main
      ref={targetRef}
      className="relative h-screen bg-stone-950"
      // style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-100vh)] ">
          <footer
            ref={ref}
            className="relative h-full l w-full justify-start  flex items-start pt-[100px] p-[5vw] flex-col lg:p-[10vw] md:py-20 font-primary  gap-10 overflow-scroll"
          >
            <section className="relative flex-1 flex-col flex w-full h-full flex-wrap text-blue-50 justify-center items-center gap-7">
              <h3 className="font-medium text-base md:text-lg text-lime-400 imelg:leading-10 md:leading-9 leading-8 mt-[5vw]">
                Thinking of a project?
              </h3>
              <h1 className="text-3xl uppercase font-black  flex text-center ">
                Reach out & share your vision
              </h1>
              <button
                onClick={() => handleClick(user)}
                className="transiton duration-300 hover:text-lime-400 hover:border-lime-400 uppercase border rounded-full w-32 h-32 font-medium p-5"
              >
                send us <br /> note
              </button>
            </section>

            <section className="p-[2vw] flex justify-between  relative primary-font  text-gray-300 w-full">
              <div>
                <Socials />
              </div>
              <div className="h-full relative self-end">
                <h2 className="text-right capitalize ">
                  all rights reserved <br />
                  <span className="lowercase">
                    roniecode&copy;{date.getUTCFullYear()}
                  </span>
                </h2>
              </div>
            </section>
          </footer>
        </div>
      </div>
    </main>
  );
});

export default Footer;
