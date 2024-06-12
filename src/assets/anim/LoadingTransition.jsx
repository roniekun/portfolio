import React, { useState, useContext, useLayoutEffect, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import gsap from "gsap";
import splitString from "./SplitStrings";
import { Timeline } from "gsap/gsap-core";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingTransition({ children }) {
  const { isLoading, setLoading } = useContext(DataContext);
  const title = useRef(null);
  const titleContainer = useRef(null);
  const container = useRef(null);
  const customText = "roniecode";
  const [text, setText] = useState();
  const [progress, setProgress] = useState(0);
  const titleTexts = splitString(customText);

  useLayoutEffect(() => {
    const setLoadingState = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    let timer = 0;
    setInterval(() => {
      if (timer <= 100) {
        setProgress(timer++);
      }
      timer += 3;
    }, 60);

    const animateTimeline = () => {
      gsap.registerPlugin(Timeline);

      const tl = gsap.timeline();

      tl.to(window.document.body, { overflow: "hidden" })

        .to(titleContainer.current, {
          duration: 1,
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
                delay: 0.5,
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            ref={container}
            className="fixed text-neutral-800 cursor-wait w-[100vw] h-[100vh] z-50 flex justify-center items-center flex-col overflow-hidden bg-white "
          >
            <div
              ref={titleContainer}
              className="flex flex-row uppercase text-2xl md:text-4xl font-primary  font-bold overflow-hidden"
            >
              {titleTexts.map((text, idx) => (
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  transition={{
                    delay: idx * 0.03,
                    duration: 0.3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                  }}
                  className="flex translate-y-full justify-center items-center"
                >
                  {text}
                </motion.h1>
              ))}
            </div>

            <span className="text-xl absolute top-[80vh] font-primary font-medium  right-[10vw] m-2">
              {progress}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </main>
  );
}
