import React from 'react'
import gsap from 'gsap'
 import ScrollTrigger from 'gsap/ScrollTrigger'
 import { useGSAP } from '@gsap/react'

const Services = () => {

  const text ="My goal is to provide a digital experience that serves a meaningful purpose while also giving your business a significant advantage."
  const words = text.split(" ")

  useGSAP(()=>{
     gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: ".parent",
      start: "top center",
      end: "bottom bottom",

      onEnter: () => {
        gsap.fromTo(".word", { y: "100%"},{y:"0%", stagger: .01, duration: .3})
        
      },
      onLeaveBack: () => {
        gsap.to(".word", { y: "120%",})

      },
      onLeave:() =>{

      },
      onEnterBack: ()=> {

      }
    });

    return () => {
      trigger.kill(); 
    }
  })

  return (
    <main className='parent relative flex justify-left h-full flex-col'>
          <div className='flex flex-wrap mt-14 mx-[5vw] justify-left max-w-[70%]'>
              {words.map((word,idx) => (
            <div className='flex w-fit h-fit mr-2 overflow-hidden md:py-2'>
                 <div className='word md:text-2xl text-[6vw] text-stone-900  font-normal transform translate-y-14'>
                  {word}
               </div> 
           </div>
              ))}
          </div>
          <div className='relative rounded-2xl border my-5 w-[90%] bg-neutral-100 bg-opacity-25 h-[500px] self-center'> 
          </div>

    </main>
  )
}

export default Services