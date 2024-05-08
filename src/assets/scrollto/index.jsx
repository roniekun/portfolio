import React from 'react'
import { LuArrowUpToLine } from "react-icons/lu";
import { useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Scrollbtn = () => {
    const [showbtn, setShowbtn] = useState(false)
    const navigate = useNavigate()
    const button = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
        setShowbtn(window.scrollY > 400)
        }

        window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    
    gsap.registerPlugin(useGSAP);
      useGSAP (() => {
        if(showbtn){
        gsap.fromTo(button.current, {
          scale: 0, duration: .3, ease: 'power1.in'
        }
        , {scale: 1})
        }
        else{
          gsap.to(button.current, {
          scale: 0, duration: .3, ease: 'power2.out'
        })
        }
      }
      , {dependencies: [showbtn]})
  
    const handleClick = () =>{
        window.scrollTo({top, behavior: 'smooth'})
    }

  return (
    <>
        <button
        ref={button}
        id='btn'
        onClick={handleClick}
         className='cursor-pointer scale-0 bg-white fixed z-40 bottom-10 rounded-full flex justify-center md:h-16 md:w-16 h-12 w-12 items-center shadow-2xl left-1/2 transform -translate-x-1/2 shadow-glow hover:shadow-glow-hover transition duration-300'>
                 <LuArrowUpToLine className='w-7 h-7 brightness-200' />
         </button>
    </>
  )
}

export default Scrollbtn