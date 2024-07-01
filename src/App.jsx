import { Routes, Route, useLocation, useParams } from "react-router-dom";
import LoadingTransition from "./assets/anim/LoadingTransition";
import Header from "./component/header";
import Navbar from "./component/navbar";
import Nav from "./component/header/assets/Nav";
import Home from "./pages/home";
import AboutUser from "./pages/about";
import Gallery from "./pages/gallery";
import Notfound from "./pages/notfound";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import Scrollbtn from "./assets/scrollto";
import { ScrollTrigger } from "gsap/all";
import {
  useRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import useWindowSize from "./hooks/useWIndowHooks/useWIndowSize";
import {
  useScroll,
  useTransform,
  AnimatePresence,
  motion,
} from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import { DataContext } from "./context/DataContext";

function App() {
  const { textColorPrimary, bg } = useContext(ThemeContext);
  const { isDesktop, isMobile, isToggleMenu } = useContext(DataContext);
  const { id } = useParams();
  const { windowWidth } = useWindowSize();
  const location = useLocation();
  const lenis = new Lenis();

  // useLayoutEffect(() => {
  //   setLoading(false);
  // }, []);

  gsap.registerPlugin(ScrollTrigger);
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const calcProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = calcProgress.on("change", (latest) => {
      setCurrentProgress(Math.round(latest));
    });

    return () => unsubscribe();
  }, [calcProgress]);

  return (
    <LoadingTransition>
      <main
        ref={container}
        style={{ width: windowWidth }}
        className={`flex flex-col w-screen font-tertiary ${textColorPrimary} ${bg}`}
      >
        <Scrollbtn scrollProgress={currentProgress} />
        <Header />
        {isDesktop && <Nav />}
        {isMobile && <Navbar />}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />} />
            <Route path="/:id/" element={<Home />} />
            <Route exact path="/about-author" element={<AboutUser />} />
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
