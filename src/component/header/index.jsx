import React from 'react'
import Menu from './assets/Menu'
import { useLocation } from 'react-router-dom'
import { useState, useEffect,useContext, useRef } from 'react'
import { SlClose } from "react-icons/sl";
import { DataContext } from '../../context/DataContext'
import Logo from './assets/Logo'
import Navbar from '../navbar'
import Nav from './assets/Nav'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core';

const Header = ({refs}) => {
  // const [homeButton, setHomeButton] = useState(false)
  const { isMobile, isScrolled, isToggleMenu, color, setToggleMenu} = useContext(DataContext)
  const location = useLocation()

  // refs
  const header = useRef(null)
  const nav = useRef(null)

  // useEffect(() => {
  //   setHomeButton(location.pathname !== '/' ? true : false)
  // }, [location])
  const handleClose = () => {
    setToggleMenu(false)
  }

useEffect(() => {
  if(isToggleMenu){
    gsap.to(nav.current,{height: '80vh', ease:'power2.inOut'})
    gsap.fromTo(nav.current,{duration: .5, delay: 1, y: -25, ease: 'power1.in'},{y: 0, opacity: 1})
  }
  else{
    gsap.to(nav.current,{
        ease: '[0.76, 0, 0.24, 1]',
        height: 0,
        overflow: 'hidden'
      })
  }
}, [isToggleMenu])


  return (
    <>
    <motion.header
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: .3, duration: .3}}
          ref={header}
          className={`mt-5 flex flex-col fixed h-auto  z-20 transform left-1/2 -translate-x-1/2  bg-opacity-20  w-11/12 rounded-3xl shadow-md  backdrop-blur-lg bg-zinc-200 overflow-hidden bg-blend-difference`}>
        <motion.section
            className={`flex relative justify-between px-[8vw]  items-center  h-16 z-0 `}>
              <Logo />
            { !isToggleMenu ? (isMobile ? <Menu /> : <Nav refs={refs}/>) : 
            <button className='px-2 absolute right-[5vw] '  onClick={handleClose}><SlClose className='h-7 w-7' /></button>}
        </motion.section>
        <section
        className='relative flex overflow-hidden'
        ref={nav}>
        {isMobile && <Navbar/>}
        </section>
    </motion.header>
    <Outlet />
    </>
  )
}

export default Header