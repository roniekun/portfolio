import React from "react";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const TextSlider = ({ title, position, speed, size }) => {
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const firsttextRef = useRef(null);
  const secondtextRef = useRef(null);

  let xProgress = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
    });
  }, []);

  const animation = () => {
    if (xProgress <= -100) {
      xProgress = 0;
    }
    if (xProgress > 0) {
      xProgress = -100;
    }
    gsap.set(firsttextRef.current, { xPercent: xProgress });
    gsap.set(secondtextRef.current, { xPercent: xProgress });
    xProgress += speed * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div ref={sliderContainerRef} className={`${position}`}>
      <div
        ref={sliderRef}
        style={{ fontSize: `${size}px` }}
        className="relative  flex whitespace-nowrap w-fit  overflow-hidden uppercase font-secondary"
      >
        <div ref={firsttextRef} className="pr-[1vw] w-fit relative">
          {title}
        </div>
        <div
          ref={secondtextRef}
          className="pr-[1vw] w-fit absolute left-[100%] "
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
