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

  const handleClose = () => {
    setToggleMenu(false)
  }

useEffect(() => {
  if(isToggleMenu){
    gsap.to(nav.current,{height: 'auto', ease:'power2.inOut'})
    gsap.fromTo(nav.current,{duration: .5, delay: 1, y: -5, ease: 'power1.in'},{delay: .3, y: 0, opacity: 1})
  }

  else{
    gsap.to(nav.current,{
        height: 0,
        opacity: 0
      })
  }

}, [isToggleMenu, isMobile])

  return (
    <motion.header
     initial={{opacity: 0}}
     animate={{opacity: 1, transition:{ duration: .3, delay: .3}}}
      ref={header}
      className={`mt-5 fixed h-auto z-20  overflow-hidden w-auto bg-opacity-20 backdrop-blur-lg bg-white  rounded-3xl transform left-1/2 -translate-x-1/2 opacity-0 `}>
          {/* {isScrolled ?
          <section className='p-5'> 
          <FloatingMenu />
          </section>
          : */}
          <section className='flex flex-col  md:w-[calc(100vw-100px)] w-[calc(100vw-50px)  overflow-hidden'>
        <div
            className={`flex relative  justify-between  items-center  h-16  z-0  w-[90vw]`}>
            <div >
              <Logo />
            </div>
              {isMobile ? <Menu /> : <Nav />}
        </div>
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