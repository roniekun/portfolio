import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const About = () => {

  const container = useRef(null)
  const wd = useRef(null)
  const ebt = useRef(null)

  useGSAP (()=> {
      const tl= gsap.timeline()
      gsap.registerPlugin(ScrollTrigger);
      const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: "top center",
      end: "bottom bottom",
      onEnter: () => {
            tl.to(container.current,{opacity: 1, stagger: .1, duration: .3})
            tl.from(wd.current,{opacity: 0 , y: 5})
            tl.from(ebt.current,{opacity: 0, y: 5})

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
    <main className=' bg-black'>
     <div ref={container}
         className='main p-[5vw] flex flex-col min-h-[800px] w-full opacity-0'>
              <h1 className='text-sm  font-secondary self-center mt-5 mb-10 leading-tight font-semibold text-neutral-50 capitalize'>
                   About</h1>
              <div
              ref={wd}
               className='flex flex-col gap-y-5'>
              <h1 className='capitalize font-medium text-xl font-primary  text-blue-600'>Web development</h1>
            <p className='text-lg lg:w-1/2 text-neutral-300 leading-tight mb-10'>
            Adapting to the ever-evolving world of web development, crafting intuitive interfaces and functional websites
            that engage users and convey the essence of a brand or concept. </p>
              </div>

            <div
            ref={ebt}  
             className='flex flex-col gap-y-5'>
             <h1 className='capitalize font-medium text-xl font-primary  leading-snug text-blue-600'>exploring backend Technologies</h1>
             <p className='text-lg lg:w-1/2 text-neutral-300 leading-tight mb-10'>
                  My journey extends beyond frontend design; I continually explore and master back-end technologies, databases,
                  and server management, to create end-to-end 
                  solutions that provide seamless functionality and deliver an exceptional user experience.
             </p>
            </div> 
            {/* <section className='w-full flex justify-center min-h-[400px] py-20'>
              <h1 className='text-gray-100 uppercase font-primary t text-2xl font-semibold '>tech stack</h1>
            </section>
             <section className='w-full flex justify-center min-h-[400px] py-20'>
              <h1 className='text-gray-100 font-primary t text-2xl font-semibold uppercase'>roadmap</h1>
            </section> */}
         </div>
    </main>
  )
}

export default About