import React from 'react'
import bg from './video/background-video.webm'

export const HeroBg = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black brightness-75 object-cover overflow-hidden'>
    <video 
    autoPlay loop muted
    className='absolute object-cover  h-full w-full '
    src={bg}></video>
    </div>
  )
}
