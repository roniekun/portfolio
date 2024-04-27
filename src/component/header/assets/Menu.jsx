import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion';


const Menu = () => {
    const { setToggleMenu, isToggleMenu } = useContext(DataContext)
    const btn = useRef()

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
  return (
        <AnimatePresence>
            <motion.button 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                ref={btn}
                onClick={handleClick}
                className='bg-blend-difference group flex items-center justify-center uppercase primary-font relative mx-[7vw] w-auto  -z-10 rounded-lg'> 
                    {isToggleMenu ? <span className='transition duration-300'>Close</span> : <span className='transition duration-300'>Menu</span>}
                 </motion.button>
         </AnimatePresence>
  )
}

export default Menu