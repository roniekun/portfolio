import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { forwardRef, useContext, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ThemeContext } from "../../../context/ThemeContext";

const ServicesSection = forwardRef((props, ref) => {
  const scrollAnimRefs = useRef([]);
  const {
    theme: { bg, textColorPrimary },
  } = useContext(ThemeContext);

  const text =
    "I leveraged design and technology to craft brands and products that excel, captivate, and grow seamlessly.";

  const scrollAnimText = text.split(" ");
  const text2 =
    "My goal is to provide a digital experience that serves a meaningful purpose while also giving your business a significant advantage.";
  const words = text2.split(" ");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: ".trigger-services",
      start: "top+=200px bottom",
      end: "bottom bottom",

      onEnter: () => {
        gsap.fromTo(
          ".word",
          { y: "100%" },
          { y: "0%", stagger: 0.01, duration: 0.3 }
        );
      },
      onLeaveBack: () => {
        gsap.to(".word", { y: "120%" });
      },
      onLeave: () => {},
      onEnterBack: () => {},
    });

    return () => {
      trigger.kill();
    };
  });

  return (
    <section
      ref={ref}
      id={props.id}
      style={{ color: textColorPrimary, background: bg }}
      className={`relative flex justify-left h-full flex-col font-primary  p-[5vw] lg:p-[10vw] py-[10vh]`}
    >
      {/* <section className="relative h-screen flex justify-center items-center">
        <p className="relative flex flex-wrap">
          {scrollAnimText.map((word, idx) => {
            return (
              <span
                // ref={(el) => (scrollAnimRefs.current[idx] = el)}
                key={idx}
                className="md:text-3xl text-xl  font-black mx-1 leading-normal h-fit"
              >
                {word}
              </span>
            );
          })}
        </p>
      </section> */}
      <div className="trigger-services flex flex-wrap mt-14  justify-left ">
        {words.map((word, idx) => (
          <div
            key={idx}
            className="flex w-fit h-fit mr-2 overflow-hidden md:py-2"
          >
            <div className="word md:text-2xl text-[6vw]  font-black  transform translate-y-14">
              {word}
            </div>
          </div>
        ))}
      </div>
      <div className="relative rounded-2xl border my-5 w-full bg-neutral-100 bg-opacity-25 h-[500px] self-center"></div>
    </section>
  );
});

export default ServicesSection;
