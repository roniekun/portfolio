import React from 'react'
import Menu from './assets/Menu'
import Home from './assets/Home'
import { useLocation } from 'react-router-dom'
import { useState, useEffect,useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Logo from './assets/Logo'
import Navbar from '../navbar'
import Nav from './assets/Nav'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = ({refs}) => {
  // const [homeButton, setHomeButton] = useState(false)
  const { isMobile, isScrolled, isToggleMenu, color, setToggleMenu} = useContext(DataContext)
  const location = useLocation()

  // useEffect(() => {
  //   setHomeButton(location.pathname !== '/' ? true : false)
  // }, [location])
  const handleClose = () => {
    setToggleMenu(false)
  }

  return (
    <>
    <header
          style={{height: isToggleMenu ? '90%' : ''}}
          className={`w-11/12 top-5 transition flex flex-col absolute  z-20 left-1/2  transform  -translate-x-1/2 bg-opacity-25 rounded-3xl shadow-sm  backdrop-blur-lg bg-black overflow-hidden bg-blend-difference`}>
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .3, delay: .7}}
            className={`flex relative justify-between px-[8vw]  items-center  h-16   opacity-0  z-0 `}>
              <Logo />
            { !isToggleMenu ? (isMobile ? <Menu /> : <Nav refs={refs}/>) : 
            <button onClick={handleClose}>Close</button>}
        </motion.section>
        <section>
        {isMobile && <Navbar/>}
        </section>
    </header>
    <Outlet />
    </>
  )
}

export default Header