import React, { useState, useContext, useLayoutEffect, useRef } from "react";
import { DataContext } from "../../context/DataContext";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingTransition({ children }) {
  const { isLoading, setLoading } = useContext(DataContext);
  const title = useRef(null);
  const titleContainer = useRef(null);
  const container = useRef(null);
  const textsArray = ["hi", "welcome", "to", "ronie", "code"];
  const [text, setText] = useState();
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const setLoadingState = () => {
      setLoading(false);
    };

    let timer = 0;
    setInterval(() => {
      if (timer <= 100) {
        setProgress(timer + 1);
      }
      timer += 3;
    }, 20);

    let idx = 0;
    setInterval(() => {
      if (idx <= textsArray.length - 1) {
        setText(textsArray[idx]);
      }
      idx++;
    }, 300);

    const animateTimeline = () => {
      gsap.registerPlugin(Timeline);

      const tl = gsap.timeline();

      tl.to(window.document.body, { overflow: "hidden" })

        .to(titleContainer.current, {
          duration: 2,
          opacity: 0,
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
            className="fixed cursor-wait w-[100vw] h-[100vh] z-50 flex justify-center items-center flex-col overflow-hidden bg-zinc-900 text-neutral-400"
          >
            <div ref={titleContainer} className="overflow-hidden relative p-2">
              <div
                ref={title}
                className="relative text-base font-black uppercase font-primary text-lime-500 overflow-hidden flex"
              ></div>
            </div>
            <span className="text-lime-500 text-xl absolute top-[80vh] font-primary  left-[60vw] m-2">
              {progress}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </main>
  );
}
