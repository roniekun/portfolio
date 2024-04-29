import React from 'react'
import { useContext, useRef, useEffect, useState } from 'react'
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

    const handleMouseEvent = (event) => {
            let interval = null
            let iteration = 0;
            clearInterval(interval);
            
            interval = setInterval(() => {
                btn.current.textContent = btn.current.textContent.split("")
                .map((letter, index) => {
                    if(index < iteration) {
                    return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
                
                if(iteration >= btn.current.textContent.length){ 
                clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
            }
    
  return (
        <AnimatePresence>
            <motion.button 
                data-value={isToggleMenu ? "close" : "menu"}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                ref={btn}
                onMouseEnter={handleMouseEvent}
                onMouseLeave={handleMouseEvent}
                onClick={handleClick}
                className='bg-blend-difference group flex items-center justify-center uppercase primary-font relative 
                mx-[7vw] w-auto  -z-10 rounded-lg text-black'> 
               { isToggleMenu ? "close": "menu"}
                 </motion.button>
         </AnimatePresence>
  )
}

export default Menu