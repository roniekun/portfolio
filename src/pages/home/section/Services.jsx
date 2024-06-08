import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Services = () => {
  const scrollAnimRefs = useRef([]);

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
    <main className="relative flex justify-left h-full flex-col my-5">
      <section className="relative h-[200vh] p-[5vw] flex justify-center items-center">
        <p className="relative flex flex-wrap">
          {scrollAnimText.map((word, idx) => {
            return (
              <span
                // ref={(el) => (scrollAnimRefs.current[idx] = el)}
                key={idx}
                className="md:text-3xl text-xl  text-black font-black mx-1 leading-normal h-fit"
              >
                {word}
              </span>
            );
          })}
        </p>
      </section>
      <div className="trigger-services flex flex-wrap mt-14 mx-[5vw] justify-left max-w-[70%]">
        {words.map((word, idx) => (
          <div
            key={idx}
            className="flex w-fit h-fit mr-2 overflow-hidden md:py-2"
          >
            <div className="word md:text-2xl text-[6vw] text-neutral-800 font-black  transform translate-y-14">
              {word}
            </div>
          </div>
        ))}
      </div>
      <div className="relative rounded-2xl border my-5 w-[90%] bg-neutral-100 bg-opacity-25 h-[500px] self-center"></div>
    </main>
  );
};

export default Services;
