import React from 'react'
import SendGmail from '../../assets/SendGmail'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Footer = () => {
    const { user } = useContext(DataContext)
    const date = new Date()

    const handleClick = (user) =>{  
            SendGmail(user)
    }

  return (
  <footer className='h-auto relative min-h-[400px] w-full  grid lg:grid-cols-2 p-[5vw] bg-stone-200'>
    {/* <div className='absolute h-[1px] w-11/12 bg-zinc-700 top-0 left-1/2 transform -translate-x-1/2' /> */}

        <section className='relative col-span-1 flex w-full h-full flex-wrap'>
            <h1 className='primary-font text-left font-medium  md:text-xl text-lg p-[2vw] lg:leading-10 md:leading-9 leading-8'>
                Interested in working together? <br />
                Get in touch at <a className='text-blue-700 cursor-pointer hover:opacity-85'
                onClick={()=>handleClick(user)}>roniebenitez01@gmail.com</a> or book an intro call.</h1>
        </section>

    <section className='p-[2vw] flex justify-end primary-font font-semi-bold'>
    <div className='text-left'>
        <h2 className='capitalize secondart-font font-base'>
            all rights reserved  <br /> &copy;{date.getUTCFullYear()}
        </h2>
    </div>
    </section>

</footer>

  )
}

export default Footer