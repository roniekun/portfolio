import React, { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { stacks, techs } from "../utils/stack";

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
        onLeave: () => {
          console.log("leave");
        },
        onEnterBack: () => {
          console.log("entered back");
        },
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
        className="main p-[5vw] flex flex-col min-h-[600px] w-full opacity-0 gap-y-10"
      >
        <div
          ref={wd}
          className="flex p-[5vw] rounded-2xl flex-col gap-y-5 text-center sticky top-[calc(100vh-70vh)]  border-neutral-100 border items-center justify-center "
        >
          <h1 className="capitalize font-black text-xl font-primary text-neutral-400">
            Web development
          </h1>
          <p className="lg:text-2xl  text-neutral-300 leading-tight mb-10">
            Adapting to the ever-evolving world of web development, crafting
            intuitive interfaces and functional websites that engage users and
            convey the essence of a brand or concept.
          </p>
        </div>

        <div
          ref={ebt}
          className="flex p-[5vw] rounded-2xl flex-col gap-y-5 text-center  items-center justify-center bg-neutral-800  border-zinc-700 border sticky top-[calc(100vh-70vh)] "
        >
          <h1 className="capitalize font-black text-xl font-primary   leading-snug text-neutral-400">
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
      <section className="min-h-screen p-[5vw] gap-y-5 flex flex-col">
        <div className="w-full grid grid-cols-2">
          <h1 className="text-white uppercase text-xl font-bold">techstack</h1>
          <div className="relative text-lime-400 md:text-2xl flex flex-wrap">
            {stacks.map((stack, idx) => (
              <span
                className="m-3 border  border-lime-400 font-secondary rounded-md p-5 w-fit "
                key={idx}
              >
                {stack.name}
              </span>
            ))}
          </div>
        </div>
        <span className="w-full bg-zinc-500 h-1" />
        <div className="w-full grid grid-cols-2">
          <h1 className="text-white uppercase text-xl font-bold">Software</h1>
          <div className="relative text-lime-400 md:text-2xl flex flex-wrap">
            {techs.map((item, idx) => (
              <span
                className="m-3 border  border-lime-400 font-secondary rounded-md p-5 w-fit "
                key={idx}
              >
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
