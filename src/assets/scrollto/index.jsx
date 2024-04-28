import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
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
        setShowbtn(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    
gsap.registerPlugin(useGSAP);
  useGSAP (() => {
    if(showbtn){
    gsap.fromTo('.w-16', {
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
         className='w-16 h-16 cursor-pointer scale-0 bg-blue-600 fixed z-50 bottom-10 rounded-full flex lg:mx-[calc(100vw-100px)] mx-[calc(100vw-80px)] justify-center
          items-center shadow-2xl'>
                 <IoIosArrowUp className='fill-white w-7 h-7' />
         </button>
    </>
  )
}

export default Scrollbtn