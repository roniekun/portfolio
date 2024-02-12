import {  Routes, Route, useLocation,useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Notfound from "./pages/notfound";
import Lenis from '@studio-freight/lenis'
import gsap from "gsap";
import Navbar from "./component/navbar";
import Scrollbtn from "./assets/scrollto";
import { ScrollTrigger } from "gsap/all";

function App() {
  const { id } = useParams()
  const location = useLocation();
  const lenis = new Lenis()

  gsap.registerPlugin(ScrollTrigger)
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
  
  return (
        <main className="flex flex-col bg-stone-100">
        <Scrollbtn />
        <Navbar />
          <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />} />
             <Route exact path="/:id/" element={<Home />} />
             <Route exact path="/gallery/" element={<Gallery />} />
            <Route exact path="/gallery/:id/" element={<Gallery />} />
            <Route  path="*" element={<Notfound/>} />
          </Routes>
        </AnimatePresence>
        </main>
  );
}

export default App;
