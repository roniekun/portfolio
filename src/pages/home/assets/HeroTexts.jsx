import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import useWindowSize from "../../../hooks/useWIndowHooks/useWIndowSize";

const HeroTexts = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const slider = useRef(null);
  const refsArray = useRef([]);
  const container = useRef(null);
  const [height, setHeight] = useState([]);

  const itemsArray = [
    { item: "photographers", height: undefined },
    { item: "designers", height: undefined },
    { item: "artists", height: undefined },
    { item: "freelancers", height: undefined },
    { item: "creatives", height: undefined },
    { item: "photographers", height: undefined },
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
    setHeight(refHeight);
  }, [windowWidth]);

  return (
    <div
      style={{ height: height }}
      ref={container}
      className="overflow-hidden relative "
    >
      <div
        className="relative"
        style={{ height: height * itemsArray }}
        ref={slider}
      >
        {itemsArray.map((item, idx) => (
          <h1
            style={{ height: item.height }}
            ref={(el) => (refsArray.current[idx] = el)}
            className="relative  w-fit h-fit mx-2 capitalize p-0 m-0 text-lime-500 "
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
