import React from 'react'
import Menu from './assets/Menu'
import Home from './assets/Home'
import { useLocation } from 'react-router-dom'
import { useState, useEffect,useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Logo from './assets/Logo'
import Nav from './assets/Nav'
import { motion } from 'framer-motion'

const Header = ({refs}) => {
  // const [homeButton, setHomeButton] = useState(false)
  const { isMobile, isScrolled, isToggleMenu, color} = useContext(DataContext)
  const location = useLocation()

  // useEffect(() => {
  //   setHomeButton(location.pathname !== '/' ? true : false)
  // }, [location])

  return (
    <header
          className={`w-screen top-0 transition flex flex-col relative  z-10 
           backdrop-blur-lg`}>
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .3, delay: .7}}
            className={`flex relative justify-between px-[8vw]  items-center w-screen  h-16   opacity-0  z-0 `}>
              <Logo />
            { !isToggleMenu && (isMobile ? <Menu /> : <Nav refs={refs}/>)}
        </motion.section>
    </header>
  )
}

export default Header