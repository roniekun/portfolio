import React, { forwardRef, useRef, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { stacks, techs } from "../utils/stack";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../../context/ThemeContext";

const About = forwardRef((props, ref) => {
  const {
    theme: { bg, textColorPrimary },
  } = useContext(ThemeContext);
  const container = useRef(null);
  const wd = useRef(null);
  const ebt = useRef(null);
  //start of animation
  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.registerPlugin(ScrollTrigger);
      const trigger = ScrollTrigger.create({
        trigger: wd.current,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          tl.to(container.current, {
            opacity: 1,
            stagger: 0.1,
            duration: 0.3,
          });
          tl.from(wd.current, { opacity: 0, x: -50 });
          tl.from(ebt.current, { opacity: 0, x: 50 });
        },
        onLeaveBack: () => {},
        onLeave: () => {},
        onEnterBack: () => {},
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: container.current }
  );

  return (
    <section
      style={{ color: textColorPrimary, background: bg }}
      className={`relative`}
      ref={ref}
      {...props}
    >
      <div
        ref={container}
        className={`main flex flex-col w-full opacity-0 relative overflow-hidden font-primary  p-[5vw] lg:p-[10vw]`}
      >
        <div
          ref={wd}
          className="flex flex-col relative w-full p-[5vw] gap-10 rounded-2xl text-balance"
        >
          <h1 className="capitalize relative md:text-xl text-lg font-medium">
            Web development
          </h1>
          <p className="text-lg lg:text-xl text-secondary  leading-tight col-span-2">
            Adapting to the ever-evolving world of web development, crafting
            intuitive interfaces and functional websites that engage users and
            convey the essence of a brand or concept.
          </p>
        </div>

        <div
          ref={ebt}
          className="flex flex-col p-[5vw] rounded-2xl gap-10 text-balance "
        >
          <h1 className="capitalize relative md:text-xl text-lg font-medium">
            exploring backend Technologies
          </h1>
          <p className="text-lg lg:text-xl leading-tight mb-10  col-span-2">
            My journey extends beyond frontend design; I continually explore and
            master back-end technologies, databases, and server management, to
            create end-to-end solutions that provide seamless functionality and
            deliver an exceptional user experience.
          </p>
        </div>
      </div>
      <section className=" relative pb-[200px] p-[5vw] gap-y-5 flex flex-col justify-center font-primary items-center">
        <div className="relative w-full gap-5 flex ">
          <h1 className="relative font-secodary text-lime-500 uppercase text-balance">
            techstack
          </h1>
          <Marquee autoFill className="relative gap-2 flex">
            {stacks.map((stack, idx) => (
              <span className="relative md:text-2xl text-lg mx-3" key={idx}>
                {stack.name}
              </span>
            ))}
          </Marquee>
        </div>
        <span className="w-full bg-zinc-500 h-1" />
        <div className="w-full grid grid-cols-2">
          <h1 className=" uppercase text-lg font-bold">Software</h1>
          <div className="relative text-lime-400 md:text-2xl flex flex-wrap">
            {techs.map((item, idx) => (
              <span className=" mx-3" key={idx}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
});

export default About;
