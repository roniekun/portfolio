import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react'

const Scrollbtn = () => {
    const [showbtn, setShowbtn] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
        setShowbtn(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [showbtn])
    

    const handleClick = () =>{
        window.scrollTo({top, behavior: 'smooth'})
    }
  return (
    <>
    {showbtn &&
        <div
        onClick={handleClick}
         className='w-12 h-12 cursor-pointer bg-blue-600 fixed z-20 bottom-10 lg:right-10 right-5 rounded-full flex justify-center items-center'>
         <IoIosArrowUp className='fill-white' />
         </div>}
    </>
  )
}

export default Scrollbtn