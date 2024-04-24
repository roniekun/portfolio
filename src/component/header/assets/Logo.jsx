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
    className='primary-font tracking-wide title-font md:text-base transition duration-500 text-black 
    font-bold relative select-none cursor-pointer mx-[5vw]'>
      <h1>RONIECODE</h1>
    </main>
  )
}

export default Logo