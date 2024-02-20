import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Scrollbtn = () => {
    const [showbtn, setShowbtn] = useState(false)
    const navigate = useNavigate()
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
        navigate('/')
    }
  return (
    <>
    {showbtn &&
        <button
        onClick={handleClick}
         className='w-12 h-12 cursor-pointer bg-blue-600 fixed z-20 bottom-10 lg:right-10 right-5 rounded-full flex justify-center items-center shadow-2xl'>
         <IoIosArrowUp className='fill-white' />
         </button>}
    </>
  )
}

export default Scrollbtn