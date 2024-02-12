import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const Close = () => {
    const { setToggleMenu } = useContext(DataContext)
  return (
            <button
            onClick={()=>setToggleMenu(false)}
            className='group  cursor-pointer brightness-90 hover:brightness-100 text-gray-100 secondary-font 
            place-items-center flex w-fit  px-2 py-1 rounded-lg'>
            
            <span className='text-[4vw]'>Close</span> 
            <IoCloseSharp className='fill-gray-100 w-[7vw] h-[7vw] relative group-hover:brightness-100'/>
            </button> 
  )
}

export default Close