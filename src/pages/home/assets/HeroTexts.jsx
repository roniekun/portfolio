import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import useWindowSize from "../../../hooks/useWIndowHooks/useWIndowSize";

const HeroTexts = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const slider = useRef(null);
  const refsArray = useRef([]);
  const container = useRef(null);
  const [height, setHeight] = useState(0);

  const itemsArray = [
    { item: "Photographers"},
    { item: "Designers"},
    { item: "Digital Artists"},
    { item: "Freelancers"},
    { item: "Creatives"},
    { item: "Photographers"},
  ];

  useLayoutEffect(() => {
    let index = 1;

    let tl = gsap.timeline();
    const interval = setInterval(() => {
      tl.to(slider.current, {
        y: `-${height * index}`,
      
        onComplete: () => {
          if (index === itemsArray.length - 1) {
            gsap.set(slider.current, { y: 0 });
            index = 1;
          } else {
            index++;
         
          }
        },
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [itemsArray.length, height, refsArray.length]);

  useLayoutEffect(() => {
    const refHeight = refsArray.current[0].getBoundingClientRect().height;
    setHeight(Math.round(refHeight));
  }, [windowWidth]);

  return (
    <div
      style={{ height: `${height }px`}}
      ref={container}
      className="overflow-hidden relative "
    >
      <div
        className="relative"
        style={{ height: `${height * itemsArray}px` }}
        ref={slider}
      >
        {itemsArray.map((item, idx) => (
          <h1
            style={{ height: item.height }}
            ref={(el) => (refsArray.current[idx] = el)}
            className="relative  w-fit h-fit mx-1 capitalize p-0 m-0 text-lime-500 font-black"
            key={idx}
          >
            {item.item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default HeroTexts;
