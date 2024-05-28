import React, { useState, useContext, useLayoutEffect, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import CustomEase from "gsap/CustomEase";
import { letters } from "../../utils/letters";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingTransition({ children }) {
  const { isLoading, setLoading } = useContext(DataContext);
  const title = useRef(null);
  const cover = useRef(null);
  const titleContainer = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    const setLoadingState = () => {
      setLoading(false);
    };
    const textAnim = () => {
      let interval = null;
      let iteration = 0;
      const initialContent = title.current.textContent;
      clearInterval(interval);
      interval = setInterval(() => {
        title.current.textContent = title.current.textContent
          .split("")
          .map((_, idx) => {
            if (idx < iteration) {
              return initialContent[idx];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= title.current.textContent.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 50);
    };

    const animateTimeline = () => {
      gsap.registerPlugin(Timeline);

      const tl = gsap.timeline();
      textAnim();

      tl.to(window.document.body, { overflow: "hidden" })

        .to(titleContainer.current, {
          duration: 2,
          opacity: 0,
          delay: 2.5,
          ease: "expo.in",
        })
        .call(() => {
          setLoadingState();
        })

        .to(window.document.body, { overflow: "scroll", delay: 0.3 });
    };

    animateTimeline();
  }, []);

  return (
    <main>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{
              height: 0,
              transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            ref={container}
            className="fixed cursor-wait bg-zinc-100 w-[100vw] h-[100vh] z-50 flex justify-center items-center flex-col overflow-hidden"
          >
            <div
              ref={titleContainer}
              className="overflow-hidden relative h-fit p-2"
            >
              <span
                ref={cover}
                className="w-full h-full transform -translate-y-full "
              ></span>
              <h1
                ref={title}
                className="text-stone-800 font-black relative uppercase  font-primary tracking-wide text-xl"
              >
                roniecode
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </main>
  );
}
