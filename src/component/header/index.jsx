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
    gsap.to(nav.current,{opacity: 1,duration: .3, delay: .5})
  }
  else{
    gsap.to(nav.current,{
        ease: '[0.76, 0, 0.24, 1]',
        height: 0,
        overflow: 'hidden'
      })
    gsap.to(nav.current,{opacity: 0, duration: 0})
  }
}, [isToggleMenu])


  return (
    <>
    <motion.header
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: .3, duration: .3}}
          ref={header}
          className={`mt-5 flex flex-col absolute h-auto  z-20 transform left-1/2 -translate-x-1/2  bg-opacity-25  w-11/12 rounded-3xl shadow-sm  backdrop-blur-lg bg-gray-500 overflow-hidden bg-blend-difference`}>
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