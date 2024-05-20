import { Routes, Route, useLocation, useParams } from "react-router-dom";
import LoadingTransition from "./assets/anim/LoadingTransition";
import Header from "./component/header";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Notfound from "./pages/notfound";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Scrollbtn from "./assets/scrollto";
import { ScrollTrigger } from "gsap/all";
import { useRef, useContext, useEffect } from "react";
import useWindowSize from "./hooks/useWIndowHooks/useWIndowSize";
import {
  useScroll,
  useTransform,
  AnimatePresence,
  motion,
} from "framer-motion";
import { DataContext } from "./context/DataContext";

function App() {
  const { id } = useParams();
  const { width } = useWindowSize();
  const location = useLocation();
  const lenis = new Lenis();

  gsap.registerPlugin(ScrollTrigger);
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const container = useRef(null);
  const { setYProgress } = useContext(DataContext);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setYProgress(scrollYProgress);
  }, [scrollYProgress]);

  const calcWidth = useTransform(scrollYProgress, [0, 1], [0, width]);

  return (
    <LoadingTransition>
      <main
        ref={container}
        className="flex flex-col bg-stone-100 w-screen font-primary"
      >
        <motion.div
          style={{ width: calcWidth }}
          className="h-1 z-50 top-0 rounded-lg fixed bg-gradient-to-r  from-slate-800 via-blue-700 to-slate-800"
        />
        <Scrollbtn />
        <Header />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />} />
            <Route path="/:id/" element={<Home />} />
            <Route path="/gallery/" element={<Gallery />} />
            <Route path="/gallery/:id/" element={<Gallery />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </AnimatePresence>
      </main>
    </LoadingTransition>
  );
}

export default App;
