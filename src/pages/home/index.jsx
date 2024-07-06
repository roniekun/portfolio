import { motion } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Hero from "./section/Hero";
import Profile from "./section/Profile";
import About from "./section/About";
import Works from "./section/Works";
import Services from "./section/Services";
import Accordion from "./assets/Accordion";
import Footer from "../../component/footer";
import Contact from "./section/Contact";
import { useParams } from "react-router-dom";
import Testimonials from "./section/Testimonials";

const Home = () => {
  const { user, setTitle, isMobile } = useContext(DataContext);
  const profile = useRef(null);
  const services = useRef(null);
  const about = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);
  const hero = useRef(null);
  const container = useRef(null);
  const refsArray = [about, services, works, contact];
  let { id } = useParams();

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  //setting meta tags
  useEffect(() => {
    location.title = "Freelance";
    setTitle(`${location.title} - ${user.title} `);
  }, [location.pathname]);
  //scroll in to view
  useEffect(() => {
    refsArray.forEach((ref) => {
      if (ref.current.id === id) {
        setTimeout(
          () => {
            ref.current.scrollIntoView({ behavior: "smooth" });
          },
          isMobile ? 1000 : 0
        );
        setTitle(`${id.charAt(0).toUpperCase() + id.slice(1)} - ${user.title}`);
      }
    });
  }, [id]);

  const scrollIntoView = () => {
    contact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.main
      ref={container}
      className="relative flex flex-col h-auto w-full"
    >
      <Hero ref={hero} scrollFn={scrollIntoView} />
      <Profile ref={profile} id={"profile"} />
      <About ref={about} id={"about"} />
      <Services ref={services} id={"services"} />
      <Works ref={works} id={"works"} />
      <Testimonials />
      <Accordion />
      <Contact ref={contact} id={"contact"} />
      <Footer ref={footer} />
    </motion.main>
  );
};

export default Home;
