import React from 'react'
import myImage from "./images/avatar.jpg"

const Avatar = () => {
  return (
      <div className='rounded-xl  h-[500px] md:w-[500px] w-[calc(100vw-1rem)] object-cover  flex overflow-hidden' >
            <img className='object-cover' src={myImage} alt="avatar" placeholder='blur' />
          </div>

  )
}

export default Avatar