import React, { useState, useContext, useLayoutEffect, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import gsap from "gsap";
import splitString from "./SplitStrings";
import { Timeline } from "gsap/gsap-core";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";

export default function LoadingTransition({ children }) {
  const { isLoading, setLoading } = useContext(DataContext);
  const { setIsDarkTheme, bg, textColorPrimary } = useContext(ThemeContext);
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
  const onesRef = useRef(null);
  const tenthsRef = useRef(null);
  const hundredthsRef = useRef(null);
  const percentRef = useRef(null);
  const [loadingHeight, setLoadingHeight] = useState();

  const numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  useLayoutEffect(() => {
    setIsDarkTheme(false);
    const tCWidth = titleContainer.current.offsetWidth;
    setWidth(Math.round(tCWidth));
    const setLoadingState = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    const percentHeight = Math.round(
      percentRef.current.getBoundingClientRect().height
    );
    setLoadingHeight(percentHeight);
    const hundredthsHeight = Math.round(
      hundredthsRef.current.getBoundingClientRect().height
    );
    const tenthsHeight = Math.round(
      tenthsRef.current.getBoundingClientRect().height
    );
    const onesHeight = Math.round(
      onesRef.current.getBoundingClientRect().height
    );

    const tl = gsap.timeline();
    if (isLoading) {
      tl.add(
        gsap.to(onesRef.current, {
          y: `-${onesHeight - percentHeight}px`,
          ease: "power2.in",
          duration: 2,
        }),
        gsap.to(tenthsRef.current, {
          y: `-${tenthsHeight - percentHeight}px`,
          duration: 3,
          ease: "power2.in",
        }),
        gsap.to(hundredthsRef.current, {
          y: `-${hundredthsHeight - percentHeight}px`,
          delay: 2.5,
          duration: 0.5,
          ease: "power2.in",
        })
      );
    }

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
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            ref={container}
            className={`fixed cursor-wait w-[100vw] h-[100vh] z-50 flex overflow-hidden  justify-center items-center ${textColorPrimary} ${bg}`}
          >
            <div
              style={{ width: `${width}px` }}
              ref={titleSlider}
              className="relative rounded-md pt-3 overflow-hidden"
            >
              <div
                ref={titleContainer}
                className="flex uppercase text-2xl md:text-4xl font-medium rounded-md"
              >
                {titleTexts.map((text, idx) => (
                  <h1
                    id="char"
                    key={idx}
                    ref={(el) => (charsArray.current[idx] = el)}
                    className="flex translate-y-full justify-center items-center"
                  >
                    {/* {text} */}
                  </h1>
                ))}
              </div>
            </div>

            <div
              style={{ height: `${loadingHeight}px` }}
              className="text-2xl  self-center relative p-2  m-2 flex font-semibold overflow-hidden font-secondary"
            >
              <div ref={hundredthsRef} className="flex flex-col w-fit h-fit">
                <span className="opacity-0">0</span>
                <span className="bg-transparent">1</span>
              </div>
              <div
                ref={tenthsRef}
                className="relative flex flex-col h-fit w-fit"
              >
                {numsArray.map((i, idx) => (
                  <div key={idx}>{i}</div>
                ))}
              </div>

              <div ref={onesRef} className="relative flex flex-col h-fit w-fit">
                {numsArray.map((i, idx) => (
                  <div key={idx}>{i}</div>
                ))}
              </div>
              <div ref={percentRef} className="h-fit">
                %
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </main>
  );
}
