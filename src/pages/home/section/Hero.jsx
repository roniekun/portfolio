import React, { forwardRef, useContext, useRef, useLayoutEffect } from "react";
import HeroTexts from "../assets/HeroTexts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { DataContext } from "../../../context/DataContext";
import splitString from "../../../assets/anim/SplitStrings";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = forwardRef((props, ref) => {
  const { isLoading } = useContext(DataContext);
  const {theme:{bg, textColorPrimary}}= useContext(ThemeContext)
  const hero = useRef(null);
  const heroTexts = ["webstie", "undre", "construciton"];
  const heroChars = useRef([]);
  const heroBtnRef = useRef();

  // hero animation
  useGSAP(
    () => {
      const tl = gsap.timeline();
      setTimeout(() => {
        heroChars.current.forEach((el, idx) => {
          if (!isLoading) {
            gsap.fromTo(
              el,
              {
                y: "110%",
                ease: "power4.out",
              },
              { y: 0, delay: idx * 0.1, duration: idx === 0 ? 0.2 : idx * 0.3 }
            );
          }
        });
      }, 500);

      tl.fromTo(
        heroBtnRef.current,
        {
          opacity: 0,
        },
        { opacity: 1, delay: 1.5, duration: 0.3 }
      );
    },

    { dependencies: [isLoading] }
  );

  //on-scroll hero animation
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(hero.current, {
      // y: "50%",
      ease: [0.76, 0, 0.24, 1],
      opacity: 0.5,
      scrollTrigger: {
        trigger: hero.current,
        start: "top+=20% top",
        end: "bottom-=20% top+=10%",
        scrub: true,
      },
    });
    tl.fromTo(
      hero.current,
      {
        filter: "brightness(100%)",
      },
      {
        filter: "brightness(0%)",
        scrollTrigger: {
          trigger: hero.current,
          start: "center top",
          end: "bottom+=600px top",
          scrub: true,
        },
      }
    );
  }, []);

  const text = splitString(heroTexts);

  return (
    <section
      style={{color: textColorPrimary, background: bg}}
      ref={ref}
      className="flex flex-col sticky top-0  sm:h-[800px] h-[90vh] lg:h-screen
         z-0  justify-center items-center  p-[5vw] lg:p-[10vw]"
    >
      <div
        ref={hero}
        className="w-full flex flex-col justify-end items-end gap-5 overflow-hidden"
      >
        <div className="justify-center w-full flex items-center flex-col overflow-hidden ">
          {heroTexts.map((word, idx) => (
            <div
              className="overflow-hidden justify-center flex items-center  h-fit"
              key={idx}
            >
              <h1
                ref={(el) => (heroChars.current[idx] = el)}
                className="md:text-4xl text-2xl font-black select-none leading-tight tracking-normal font-secondary translate-y-[200%] z-10 
             uppercase text-center "
              >
                {word}
              </h1>
              <> {idx < heroTexts.length - 1 && <br />}</>
            </div>
          ))}

          {!isLoading && (
            <div
              ref={heroBtnRef}
              className="flex md:flex-row flex-col gap-2 relative self-center"
            >
              <span
                onClick={props.scrollFn}
                className="relative z-10 cursor-pointer text-xl text-neutral-400 border-neutral-400 my-10 hover:text-lime-500 flex justify-center items-center font font-primary font-bold underline
        tracking-10  rounded-xl w-full h-16 py-5 px-7 transition duration-300 text-center whitespace-nowrap"
              >
                Start a project
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex  top-[85%] left-1/2 w-full transition  px-[5vw] lg:px-[10vw] h-auto duration-300 leading-tight  justify-start items-start  text-[1rem] whitespace-nowrap">
        <h1>Custom Web Solutions for</h1>
        <HeroTexts />
      </div>
    </section>
  );
});

export default Hero;
