import {  Routes, Route, useLocation,useParams } from "react-router-dom";
import Header from "./component/header";
import Home from "./pages/home"
import Gallery from "./pages/gallery"
import Notfound from "./pages/notfound"
import Lenis from '@studio-freight/lenis'
import gsap from "gsap";
import Scrollbtn from "./assets/scrollto"
import { ScrollTrigger } from "gsap/all"
import { useRef } from 'react'
import useWindowSize from "./hooks/useWIndowHooks/useWIndowSize";
import { useScroll, useTransform, AnimatePresence, motion } from 'framer-motion'

function App() {
  const { id } = useParams()
  const {width} =useWindowSize()
  const location = useLocation();
  const lenis = new Lenis()

  gsap.registerPlugin(ScrollTrigger)
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target:container,
        offset: ['start start', 'end end' ]
         })
         
     const transfromWidth = useTransform(scrollYProgress, [0 , 1], [0, width])
     
  return (
        <main 
        ref={container}
          className="flex flex-col bg-stone-100 w-screen overflow-hidden">
         <motion.div
         style={{width: transfromWidth}} 
         className="h-1 z-50 top-0 rounded-lg fixed bg-gradient-to-r  from-slate-800 via-blue-700 to-slate-800" />
        <Scrollbtn />
          <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Header/>}>
              <Route exact path="/" element={<Home />} />
             <Route path="/:id/" element={<Home />} />
             <Route path="/gallery/" element={<Gallery />} />
            <Route path="/gallery/:id/" element={<Gallery />} />
            <Route  path="*" element={<Notfound/>} />
            </Route>
          </Routes>
        </AnimatePresence>
        </main>
  );
}

export default App;
