import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const About = () => {

  const container = useRef(null)

  useGSAP (()=> {
      gsap.registerPlugin(ScrollTrigger);
      const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: "top-=400px top",
      end: "bottom bottom",
      onEnter: () => {
            gsap.to(container.current,{opacity: 1})
      },
      onLeaveBack: () => {
                    gsap.to(container.current,{opacity: 0})        

      },
      onLeave:() =>{
        console.log('leave')

      },
      onEnterBack: ()=> {
        console.log('entered back')

      }
    });

    return () => {
      trigger.kill(); 
    }

  },{scope: container.current}) 

  return (
    <main className=' bg-zinc-950'>
     <div ref={container}
         className='main p-[5vw] flex flex-col  bg-zinc-950 min-h-[800px] w-full opacity-0'>
              <h1 className='text-3xl uppercase primary-font self-center mt-20 mb-10 leading-tight font-semibold text-gray-200'>
                   About</h1>
              <div className='flex flex-col gap-y-5'>
              <h1 className='capitalize font-medium text-xl primary-font text-gray-200'>Web development</h1>
            <p className='secondary-font text-lg lg:w-1/2 text-balance text-stone-400 leading-tight mb-10'>
            Adapting to the ever-evolving world of web development, crafting intuitive interfaces and functional websites
            that engage users and convey the essence of a brand or concept. </p>
              </div>

            <div className='flex flex-col gap-y-5 '>
             <h1 className='capitalize font-medium text-xl primary-font leading-snug text-gray-200'>exploring backend Technologies</h1>
             <p className='secondary-font text-lg lg:w-1/2 text-balance text-stone-400 leading-tight mb-10'>
                  My journey extends beyond frontend design; I continually explore and master back-end technologies, databases,
                  and server management, to create end-to-end 
                  solutions that provide seamless functionality and deliver an exceptional user experience.
             </p>
            </div> 
            <section className='w-full flex justify-center min-h-[400px] py-20'>
              <h1 className='text-blue-200 uppercase primary-font text-2xl font-semibold '>tech stack</h1>
            </section>
             <section className='w-full flex justify-center min-h-[400px] py-20'>
              <h1 className='text-blue-200 primary-font text-2xl font-semibold uppercase'>roadmap</h1>
            </section>
         </div>
    </main>
  )
}

export default About