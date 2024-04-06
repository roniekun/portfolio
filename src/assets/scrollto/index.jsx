import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { useTransform } from 'framer-motion';
import { DataContext } from '../../context/DataContext';
import useWindowSize from '../../hooks/useWIndowHooks/useWIndowSize';

const Scrollbtn = () => {
    const [showbtn, setShowbtn] = useState(false)
    const navigate = useNavigate()
    const [ scrollY, setScrollY ] = useState(0)
    const { height } = useWindowSize()

    useEffect(() => {
        const handleScroll = () => {
        setShowbtn(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [showbtn, scrollY])
    
    const handleClick = () =>{
        window.scrollTo({top, behavior: 'smooth'})
        navigate('/')
    }

  return (
    <>
    {showbtn &&
        <button
        onClick={handleClick}
         className='w-16 h-16 cursor-pointer bg-blue-600 fixed z-20 bottom-10 lg:right-10 right-5 rounded-full flex justify-center
          items-center shadow-2xl'>
                 <IoIosArrowUp className='fill-white w-7 h-7' />
         </button>}
    </>
  )
}

export default Scrollbtn