import React, { useRef, useLayoutEffect, useState } from "react";
import { testimonials } from "../utils/testimonials";
import { useTransform, useScroll, motion } from "framer-motion";

const Testimonials = () => {
  const sliderContainerRef = useRef(null);
  const refsArray = useRef([]);
  const { scrollYProgress } = useScroll({
    target: sliderContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="flex lg:flex-row-reverse flex-col gap-10 font-primary  px-[5vw] lg:px-[10vw]">
      <div className="flex lg:sticky lg:top-[25vh]  justify-start h-fit items-start p-[5vw] md:p-[5vw] lg:w-1/2 lg:my-20">
        <span className="relative text-xl leading-tight font-normal text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          repudiandae voluptate accusantium doloremque enim ipsam, Dignissi mos
          quo et corrupti quisquam harum!
        </span>
      </div>
      <motion.div
        ref={sliderContainerRef}
        className="lg:w-1/2 flex-col relative flex gap-2 "
      >
        {testimonials.map((item, idx) => {
          const range = [idx * 0.25, 1];
          const targetScale = 1 - (testimonials.length - 1 - idx) * 0.03;
          const scale = useTransform(scrollYProgress, range, [1, targetScale]);
          return (
            <motion.div
              key={idx}
              style={{ scale: scale }}
              ref={(el) => (refsArray.current[idx] = el)}
              className={`${
                idx === testimonials.length ? "h-1/2" : "h-screen"
              } w-full flex  flex-col justify-center sticky  top-0 lg:items-center items-start`}
            >
              <div
                style={{
                  backgroundColor: item.color,
                  top: `calc(0vh + ${idx * 20}px)`,
                }}
                className="overflow-hidden relative border border-opacity-25 backdrop-blur-xl  w-full h-[500px] rounded-2xl gap-y-10 flex flex-col justify-center items-center px-[5vw] shadow-2xl"
              >
                <span className="flex bg-opacity-70 justify-center items-center absolute w-[70px] h-[70px] text-2xl top-0 right-0 border rounded-bl-xl bg-neutral-400">
                  {idx + 1}
                </span>
                <div className="self-center w-[150px] aspect-square border rounded-full"></div>
                <div className="gap-1 flex flex-col self-center items-center">
                  <h2 className="font-normal text-base md:text-lg">
                    {item.name}
                  </h2>
                  <h3 className="text-base">Rating: {item.rating} stars </h3>
                </div>
                <div>
                  <h2 className="text-lg md:text-xl">
                    &quot;{item.testimonial}&quot;
                  </h2>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Testimonials;
