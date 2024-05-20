import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
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
import PageTransition from "../../assets/anim/PageTransition";

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

  useEffect(() => {
    location.title = "Freelance";
    setTitle(`${location.title} - ${user.title} `);
  }, [location.pathname]);

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(hero.current, {
      y: "50%",
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
        className="flex flex-col relative 100 text-neutral-300 p-[5vw] lg:gap-y-2 justify-center md:h-[800px] h-[85vh]
         items-center z-0 overflow-hidden bg-black"
      >
        <div
          ref={hero}
          className="w-full self-center flex flex-col justify-center items-center gap-5"
        >
          <div className="justify-center w-full flex items-center flex-col">
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
          </div>
          {!isLoading && (
            <span
              ref={exploreRef}
              onClick={() =>
                profile.current.scrollIntoView({ behavior: "smooth" })
              }
              className="opacity-0 relative z-10 cursor-pointer text-lime-400 border-lime-400 ring ring-inset ring-lime-400 text-base hover:bg-lime-500 hover:border-lime-400 hover:text-black flex justify-center font-secondary items-center font font-primary uppercase font-bold
        tracking-10  rounded-full w-32 h-32 transition duration-300 text-center"
            >
              Explore
            </span>
          )}
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

      <section className="px-[5vw] gap-5 flex flex-col justify-center items-center relative  bg-zinc-950 py-[5vw] ">
        <h1 className="mt-5 font-semibold text-sm relative text-neutral-50">
          FAQ's
        </h1>
        <Accordion />
      </section>

      <section
        className="min-h-[800px] z-10 flex justify-center bg-neutral-100"
        id="contact"
        ref={contact}
      >
        <Contact />
      </section>

      {/* footer */}
      <section ref={footer} className="z-10">
        <div></div>
        <div className="lg:col-span-2 sm:w-full">
          <Footer />
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
