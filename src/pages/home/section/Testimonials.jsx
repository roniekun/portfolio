import React, { useRef, useLayoutEffect, useState } from "react";
import { testimonials } from "../utils/testimonials";
import { useTransform, useScroll, motion } from "framer-motion";

const Testimonials = () => {
  const [height, setHeight] = useState();
  const mainContainerRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const refsArray = useRef([]);
  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const height = refsArray.current[1].offsetHeight;
    const totalHeight = height * 5;
    setHeight(Math.round(totalHeight + 100));
  }, []);

  return (
    <motion.main
      ref={mainContainerRef}
      className="relative lg:grid grid-cols-2 flex flex-col-reverse mb-[10vh]"
    >
      <motion.div
        style={{ height: `${height}px` }}
        ref={sliderContainerRef}
        className="w-full flex-col relative flex gap-2"
      >
        {testimonials.map((item, idx) => {
          const range = [idx * 0.25, 1];
          const targetScale = 1 - (testimonials.length - 1 - idx) * 0.05;
          const scale = useTransform(scrollYProgress, range, [1, targetScale]);
          return (
            <motion.div
              key={idx}
              ref={(el) => (refsArray.current[idx] = el)}
              style={{
                backgroundColor: item.color,
                scale: scale,
                top: `calc(15vh + ${idx * 25}px)`,
              }}
              className={`sticky bg-opacity-50 border border-opacity-25 backdrop-blur-xl rounded-2xl p-[5vw] flex flex-col h-[60vh] justify-center items-start gap-y-10`}
            >
              <div>
                <h2 className="text-xl">{item.testimonial}</h2>
              </div>
              <div className="gap-1 flex flex-col">
                <h2 className="font-medium text-lg">{item.name}</h2>
                <h3 className="text-base">{item.rating}</h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="flex relative justify-center items-start p-[5vw] py-20">
        <span className="sticky top-[40vh] text-xl leading-tight font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          repudiandae voluptate accusantium doloremque enim ipsam, optio harum
          sed soluta aut mollitia reprehenderit quis explicabo? Dignissi mos quo
          et corrupti quisquam harum!
        </span>
      </div>
    </motion.main>
  );
};

export default Testimonials;
