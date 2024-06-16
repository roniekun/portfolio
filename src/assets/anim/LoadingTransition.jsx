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
  const titleSlider = useRef(null);
  const container = useRef(null);
  const customText = "roniecode";
  const [text, setText] = useState();
  const [progress, setProgress] = useState(0);
  const [width, setWidth] = useState();
  const titleTexts = splitString(customText);
  const charsArray = useRef([]);

  useLayoutEffect(() => {
    const tCWidth = titleContainer.current.offsetWidth;
    setWidth(tCWidth);
    const setLoadingState = () => {
      setLoading(false);
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
      const chars = gsap.utils.toArray("#char");

      const tl = gsap.timeline();

      tl.to(window.document.body, { overflow: "hidden" });
      tl.call(() => {
        chars.forEach((el, idx) => {
          gsap.to(el, { y: 0, ease: "expo.out", delay: idx * 0.07 });
        });
      })
        .to(titleSlider.current, { opacity: 0, delay: 2.5 })
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
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            ref={container}
            className="fixed text-neutral-800 cursor-wait w-screen h-screen z-50 flex overflow-hidden bg-white justify-center items-center font-primary"
          >
            <div style={{ width: `${width}px` }} className="">
              <div
                ref={titleSlider}
                className="relative rounded-md pt-3 overflow-hidden"
              >
                <div
                  ref={titleContainer}
                  className="flex uppercase text-2xl md:text-4xl font-bold rounded-md "
                >
                  {titleTexts.map((text, idx) => (
                    <h1
                      id="char"
                      key={idx}
                      ref={(el) => (charsArray.current[idx] = el)}
                      className="flex translate-y-full justify-center items-center"
                    >
                      {text}
                    </h1>
                  ))}
                </div>
              </div>
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
