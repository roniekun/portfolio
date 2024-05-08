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
                let interval = null
                let iteration = 0;
                const initialContent = btn.current.textContent
                clearInterval(interval);
                 interval = setInterval(() => {
                btn.current.textContent = btn.current.textContent.split("")
                .map((_, idx) => {
                    if(idx < iteration) {
                    return initialContent[idx];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
                
                if(iteration >= btn.current.textContent.length){ 
                clearInterval(interval);
                }
                iteration += 1/3;
            }, 100);
    }, [isToggleMenu])
    
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
                .map((_, idx) => {
                    if(idx < iteration) {
                    return event.target.dataset.value[idx];
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
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}

                className={`bg-blend-difference group flex items-center justify-center uppercase font-secondary relative 
                mx-[5vw] -z-10 rounded-lg ${isToggleMenu? 'bg-neutral-500 border-2 bg-opacity-20' : 'bg-lime-400' } w-14 text-neutral-950`}> 
               { isToggleMenu ? <button  
                ref={btn}
                onMouseEnter={handleMouseEvent}
                onMouseLeave={handleMouseEvent}
                onClick={handleClick}
               data-value="CLOSE">
                                CLOSE</button>
                                : 
                <button
                 onMouseEnter={handleMouseEvent}
                onMouseLeave={handleMouseEvent}
                onClick={handleClick}
                ref={btn} 
                data-value="MENU">
                                MENU</button>}
                 </motion.div>
         </AnimatePresence>
  )
}

export default Menu