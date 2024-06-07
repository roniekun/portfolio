import React, { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { stacks, techs } from "../utils/stack";
import Marquee from "react-fast-marquee";

const About = () => {
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
          tl.to(container.current, { opacity: 1, stagger: 0.1, duration: 0.3 });
          tl.from(wd.current, { opacity: 0, y: 5 });
          tl.from(ebt.current, { opacity: 0, y: 5 });
        },
        onLeaveBack: () => {
          gsap.to(container.current, { opacity: 0 });
        },
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
    <main className=" bg-black">
      <div
        ref={container}
        className="main p-[5vw] flex flex-col min-h-[600px] w-full opacity-0 "
      >
        <div
          ref={wd}
          className="flex p-[5vw] rounded-2xl flex-col gap-y-2 text-center  items-center justify-center "
        >
          <h1 className="capitalize font-black text-xl font-secondary  text-neutral-400">
            Web development
          </h1>
          <p className="lg:text-2xl text-secondary  text-neutral-300 leading-tight mb-10">
            Adapting to the ever-evolving world of web development, crafting
            intuitive interfaces and functional websites that engage users and
            convey the essence of a brand or concept.
          </p>
        </div>

        <div
          ref={ebt}
          className="flex p-[5vw] rounded-2xl flex-col gap-y-2 text-center  items-center justify-center"
        >
          <h1 className="capitalize font-black text-xl  font-secondary  leading-snug text-neutral-400">
            exploring backend Technologies
          </h1>
          <p className="lg:text-2xl text-neutral-300 leading-tight mb-10">
            My journey extends beyond frontend design; I continually explore and
            master back-end technologies, databases, and server management, to
            create end-to-end solutions that provide seamless functionality and
            deliver an exceptional user experience.
          </p>
        </div>
      </div>
      <section className="pb-[200px] p-[5vw] gap-y-5 flex flex-col justify-center items-center">
        <div className="w-full gap-5 flex flex-col">
          <h1 className="font-secodary text-lime-500 uppercase text-center font-black">
            techstack
          </h1>
          <Marquee autoFill className="gap-2 text-white">
            {stacks.map((stack, idx) => (
              <span
                className="font-secondary md:text-2xl text-lg m-3 "
                key={idx}
              >
                {stack.name}
              </span>
            ))}
          </Marquee>
        </div>
        <span className="w-full bg-zinc-500 h-1" />
        <div className="w-full grid grid-cols-2">
          <h1 className="text-white uppercase text-lh font-bold">Software</h1>
          <div className="relative text-lime-400 md:text-2xl flex flex-wrap">
            {techs.map((item, idx) => (
              <span className=" mx-3" key={idx}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
