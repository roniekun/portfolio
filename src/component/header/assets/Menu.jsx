import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../../context/DataContext'
import { CgMenuRight } from "react-icons/cg";
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion';


const Menu = () => {
    const { setToggleMenu, isToggleMenu } = useContext(DataContext)
    const btn = useRef()

        useEffect(() => {
        if (isToggleMenu) {
            gsap.to(btn.current, { color: 'white', borderColor: 'white' });
            document.body.style.overflow = 'hidden'
        }
        else{
            gsap.to(btn.current, { color: 'black', borderColor: 'black' });
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
                className='bg-blend-difference group flex items-center justify-center absolute right-[5vw] text-black uppercase text-[12px] py-1 w-auto px-2 -z-10'> 
       
                <CgMenuRight className='opacity-90 group-hover:opacity-80 w-7 h-7' />
                </motion.button>
         </AnimatePresence>
  )
}

export default Menu