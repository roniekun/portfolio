import React from 'react'
import Menu from './assets/Menu'
import { useLocation } from 'react-router-dom'
import { useState, useEffect,useContext, useRef } from 'react'
import { DataContext } from '../../context/DataContext'
import Logo from './assets/Logo'
import { motion } from 'framer-motion'
import FloatingMenu from './assets/FloatingMenu'
import Navbar from '../navbar'
import Nav from './assets/Nav'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Header = () => {
  const { isMobile, isScrolled, isToggleMenu, color, setToggleMenu} = useContext(DataContext)
  const location = useLocation()
  // refs
  const header = useRef(null)
  const nav = useRef(null)

  useEffect(() => {
    if(isToggleMenu){
      gsap.to(nav.current,{height: 'auto',  ease:'power2.inOut'})
      gsap.fromTo(nav.current,{duration: .5, delay: 1, y: -5, ease: 'power1.in'},{delay: .3, y: 0, opacity: 1})
    }
    else{
      gsap.to(nav.current,{
          height: 0,
          opacity: 0
        })
    }
  }, [isToggleMenu, isMobile])

  useGSAP(()=>{
    if(isScrolled){
    gsap.to(header.current,{opacity: 0, y: -10, duration: .3})
    setTimeout(() => {
              header.current.style.display="none"
      }, 100);
    }
    else{
      gsap.to(header.current,{opacity: 1, y: 0, duration: .3})
      setTimeout(() => {
              header.current.style.display="block"
      }, 100);
    }
  },{dependencies:[isScrolled] })

  return (
    <motion.header
      ref={header}
      className={`md:mt-5 mt-3 absolute transition shadow-inner duration-300  z-20 overflow-hidden bg-opacity-[10%] bg-white backdrop-blur-lg bg-blend-difference  rounded-3xl transform left-1/2  w-11/12 -translate-x-1/2`}>
          <section className='flex flex-col'>
        <motion.div
          nitial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.3, durationg:.3}}
            className={`flex relative  justify-between  items-center  md:h-14 h-[12vw]  z-0 opacity-0`}>
            <div >
              <Logo />
            </div>
              {isMobile ? <Menu /> : <Nav />}
        </motion.div>
          </section>

        <section
        className='relative flex'
        ref={nav}>
        {isMobile && <Navbar/>}
        </section>
    </motion.header>
  )
}

export default Header