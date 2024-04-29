import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import gsap from 'gsap'
import { letters } from '../../../utils/letters'
import { motion, AnimatePresence } from 'framer-motion';


const Menu = () => {
    const { setToggleMenu, isToggleMenu } = useContext(DataContext)
    const btn = useRef(null)

        useEffect(() => {
        if (isToggleMenu) {
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'scroll'
        }
        }, [isToggleMenu]);

        const handleClick = () => {
            setToggleMenu(!isToggleMenu)
        }

    const handleMouseEnter = () => {
        console.log("hovered")
    }
  return (
        <AnimatePresence>
            <motion.button 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                ref={btn}
                onMouseEnter={handleMouseEnter}
                onClick={handleClick}
                className='bg-blend-difference group flex items-center justify-center uppercase primary-font relative 
                mx-[7vw] w-auto  -z-10 rounded-lg text-black'> 
                    {isToggleMenu ? 'Close' : 'Menu'}
                 </motion.button>
         </AnimatePresence>
  )
}

export default Menu