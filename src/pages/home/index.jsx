import { motion } from "framer-motion";
import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useContext,
} from "react";
import { DataContext } from "../../context/DataContext";
import HeroTexts from "./assets/HeroTexts";
import Profile from "./section/Profile";
import About from "./section/About";
import Works from "./section/Works";
import Services from "./section/Services";
import Accordion from "./assets/Accordion";
import Footer from "../../component/footer";
import Contact from "./section/Contact";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useParams } from "react-router-dom";
import splitString from "../../assets/anim/SplitStrings";

const Home = () => {
  const { user, setTitle, setColor, color, isLoading, isTransition } =
    useContext(DataContext);
  const profile = useRef(null);
  const services = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);
  const home = useRef(null);
  const hero = useRef(null);
  const container = useRef(null);
  const refsArray = [about, services, works, contact];
  let { id } = useParams();
  const heroTexts = ["webstie", "undre", "construciton"];
  const heroChars = useRef([]);
  const exploreRef = useRef();
  //setting meta tags
  useEffect(() => {
    location.title = "Freelance";
    setTitle(`${location.title} - ${user.title} `);
  }, [location.pathname]);
  //scroll in to view
  useEffect(() => {
    refsArray.forEach((ref) => {
      if (ref.current.id === id) {
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth" });
          setTitle(
            `${id.charAt(0).toUpperCase() + id.slice(1)} - ${user.title}`
          );
        }, 100);
      }
    });
  }, [id]);

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
      }, 300);

      tl.fromTo(
        exploreRef.current,
        {
          opacity: 0,
        },
        { opacity: 1, delay: 2, duration: 0.3 }
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
        trigger: home.current,
        start: "top+=20% top",
        end: "bottom-=20% top+=10%",
        scrub: true,
      },
    });
    tl.fromTo(
      home.current,
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
    <motion.main ref={container} className="relative flex flex-col top-0">
      <section
        ref={home}
        className="flex flex-col relative  text-neutral-300 p-[5vw] lg:gap-y-5 gap-y-5 md:h-[800px] h-screen
         z-0 overflow-hidden bg-stone-950 justify-center items-end"
      >
        <div
          ref={hero}
          className="w-full flex flex-col justify-end items-end gap-5"
        >
          <div className="justify-center w-full flex items-center flex-col ">
            {heroTexts.map((word, idx) => (
              <div
                className="overflow-hidden justify-center flex items-center  h-fit"
                key={idx}
              >
                <h1
                  ref={(el) => (heroChars.current[idx] = el)}
                  className="md:text-4xl text-xl font-black select-none leading-tight tracking-normal font-primary translate-y-[200%] z-10 
             uppercase text-center "
                >
                  {word}
                </h1>
                <> {idx < heroTexts.length - 1 && <br />}</>
              </div>
            ))}

            {!isLoading && (
              <div
                ref={exploreRef}
                className="flex md:flex-row flex-col gap-2 relative self-center"
              >
                <span
                  onClick={() =>
                    contact.current.scrollIntoView({ behavior: "smooth" })
                  }
                  className="relative z-10 cursor-pointer text-neutral-400 border-neutral-400 ring ring-inset ring-neutral-400 text-base hover:bg-neutral-500 hover:border-lime-500 hover:text-black flex justify-center items-center font font-primary uppercase font-bold
        tracking-10  rounded-xl lg:w-32 w-full h-16 py-5 px-7 transition duration-300 text-center"
                >
                  Get in touch
                </span>
                <span
                  c
                  className="cursor-pointer text-lime-500 border-lime-500 ring ring-inset ring-lime-500 text-base hover:bg-lime-500 hover:border-lime-500 hover:text-black flex justify-center font-secondary items-center font uppercase font-bold
        tracking-10  rounded-xl lg:w-32 w-full h-16 py-5 px-7 transition duration-300 text-center"
                >
                  Explore
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex absolute top-[90vh] left-0 w-full transition px-[5vw] h-auto duration-300 leading-tight  justify-start items-start  text-[1rem] whitespace-nowrap">
          <h1>Custom Web Solutions for</h1>
          <HeroTexts />
        </div>
      </section>

      <section
        className="md:py-20 py-10  flex justify-center items-center relative bg-black flex-col  text-neutral-300"
        ref={profile}
      >
        <Profile />
      </section>

      <section className="min-h-[800px]" id="about" ref={about}>
        <About />
      </section>

      <section
        id="services"
        ref={services}
        className="flex min-h-[800px] flex-col  bg-zinc-300"
      >
        <Services />
      </section>

      <section
        ref={works}
        id="works"
        className="flex flex-col lg:gap-10 gap-5 z-10 rounded-t-3xl bg-stone-400 w-full box-border min-h-[800px]"
      >
        <Works />
      </section>

      <section className="px-[5vw] gap-5 flex flex-col justify-center items-center relative  bg-zinc-950 py-[5vw] z-10">
        <h1 className="mt-5 font-semibold text-sm relative text-neutral-50">
          <span className="text-lime-500">Questions? </span>
          Answer.
        </h1>
        <Accordion />
      </section>

      <section
        className="min-h-[800px] z-10 flex justify-center bg-neutral-500 rounded-b-xl "
        id="contact"
        ref={contact}
      >
        <Contact />
      </section>

      {/* footer */}
      <section ref={footer}>
        <Footer />
      </section>
    </motion.main>
  );
};

export default Home;
