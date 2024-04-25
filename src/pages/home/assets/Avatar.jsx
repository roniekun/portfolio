import React from 'react'

const Avatar = () => {
  return (
    <main className='flex flex-col place-items-center gap-y-2'>
      <div className='rounded-xl border-2 border-gray-900 h-[500px] w-[500px] object-cover flex justify-center items-center' >
            <img src="" alt="avatar" placeholder='blur' />
          </div>
      <h2 
        className='lg:text-[2vw] font-semibold text-2xl text-center text-gray-900 primary-font tracking-wide'>
             Ronie Benitez
        </h2>
        <h4 className='text-sm capitalize secondary-font tracking-tighter font-bold'>
        front-end web developer</h4>
    </main>
  )
}

export default Avatar