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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router-dom";
import splitString from "../../assets/anim/SplitStrings";

const Home = () => {
  const { user, setTitle, setColor, color, isLoading } =
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
  const heroText = "webiste undre constrcution";
  const heroChars = useRef([]);

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

  useLayoutEffect(() => {
    heroChars.current.forEach((el) => {
      const randomDelay = Math.random(0.3, 3);
      gsap.to(el, {
        opacity: 1,
        duration: 0.3,
        delay: randomDelay,
      });
    });
  }, [heroChars.current]);

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

  const text = splitString(heroText);

  return (
    <motion.main ref={container} className="relative flex flex-col top-0">
      <section
        ref={home}
        className="flex flex-col relative 100 text-neutral-100 p-[5vw] lg:gap-y-2 justify-center md:h-[800px] h-[85vh]
         items-center z-0 overflow-hidden bg-stone-950"
      >
        <div ref={hero} className="w-full self-center flex gap-y-3 x">
          <div
            className="justify-center w-full md:text-3xl text-lg tracking-normal font-primary 
             uppercase text-center leading-tight mx-[5vw]"
          >
            {text.map((char, index) => (
              <span
                className="opacity-0"
                key={index}
                ref={(el) => (heroChars.current[index] = el)}
              >
                {char}
                {index === 7 && <br />}
              </span>
            ))}
          </div>
        </div>
        <span
          onClick={() => profile.current.scrollIntoView({ behavior: "smooth" })}
          className="absolute md:bottom-20 bottom-5 cursor-pointer text-white text-sm flex justify-center items-center font-base uppercase font-primary
        tracking-10 border rounded-full w-28 h-28"
        >
          explore
        </span>
      </section>

      <section className="md:py-20 py-10  bg-black" ref={profile}>
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

      <section className="px-[5vw] gap-5 flex flex-col justify-center items-center  bg-zinc-950 py-[5vw] ">
        <h1 className="mt-5 font-semibold text-white text-sm">
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
