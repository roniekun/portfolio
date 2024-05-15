import React, { useState, useContext, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import { letters } from "../../utils/letters";

export default function LoadingTransition({ children }) {
  const { isLoading } = useContext(DataContext);
  const title = useRef(null);
  const cover = useRef(null);
  const titleContainer = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
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

    const animate = () => {
      gsap.registerPlugin(Timeline);
      const tl = gsap.timeline();
      textAnim();

      tl.to(window.document.body, { overflow: "hidden" })
        .to(cover.current, {
          y: "10%",
          delay: 3,
          duration: 0.3,
          ease: "power4.inOut",
        })
        .to(title.current, { opacity: 0 })
        .to(container.current, {
          height: 0,
          duration: 0.7,
          ease: "power4.inOut",
        })
        .to(window.document.body, { overflow: "scroll", delay: 0.3 });
    };
    animate();
  }, []);

  return (
    <main>
      <div
        ref={container}
        className="fixed cursor-wait bg-zinc-950 w-[100vw] h-[100vh] z-50 flex justify-center items-center flex-col overflow-hidden"
      >
        <div ref={titleContainer} className="overflow-hidden relative">
          <span
            ref={cover}
            className="w-full h-full bg-black transform -translate-y-full "
          ></span>
          <h1
            ref={title}
            className="text-neutral-100 relative uppercase font-normal font-primary tracking-wide text-lg"
          >
            roniecode
          </h1>
        </div>
      </div>
      {children}
    </main>
  );
}
