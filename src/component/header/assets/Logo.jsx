import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <main 
    onClick={handleClick}
    className='bg-blend-difference tracking-wide title-font text-base transition duration-500 text-gray-800
    text-left font-medium relative select-none cursor-pointer'>
      <h1>favicon</h1>
    </main>
  )
}

export default Logo