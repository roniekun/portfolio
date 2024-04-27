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
    className='tracking-wide title-font primary-font transition duration-500 text-black 
     relative select-none cursor-pointer mx-[5vw]'>
      <h1>RONIECODE</h1>
    </main>
  )
}

export default Logo