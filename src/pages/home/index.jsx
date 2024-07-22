import { motion } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Path from "./assets/Path";
import { useParams } from "react-router-dom";
import Hero from "./section/Hero";
import Profile from "./section/Profile";
import AboutSection from "./section/AboutSection";
import WorksSection from "./section/WorksSection";
import ServicesSection from "./section/ServicesSection";
import Accordion from "./assets/Accordion";
import ContactSection from "./section/ContactSection";
import Testimonials from "./section/Testimonials";
import Bento from "./section/Bento";
import Footer from "../../_component/footer";

const HomePage = () => {
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
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
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
      className={`relative flex flex-col h-auto w-full`}
    >
      <Path />
      <Hero ref={hero} scrollFn={scrollIntoView} />
      <Profile ref={profile} id={"profile"} />
      <AboutSection ref={about} id={"about"} />
      <ServicesSection ref={services} id={"services"} />
      <Bento />
      <WorksSection ref={works} id={"works"} />
      <Testimonials />
      <Accordion />
      <ContactSection ref={contact} id={"contact"} />
      <Footer ref={footer} />
    </motion.main>
  );
};

export default HomePage;
