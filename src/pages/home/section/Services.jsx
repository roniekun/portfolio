import React from 'react'
import gsap from 'gsap'
 import ScrollTrigger from 'gsap/ScrollTrigger'
 import { useGSAP } from '@gsap/react'

const Services = () => {

  const text ="My goal is to provide a digital experience that serves a meaningful purpose while also giving your business a significant advantage."
  const words = text.split(" ")
  console.log(words)

  useGSAP(()=>{
     gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: ".parent",
      start: "top-=400px top",
      end: "bottom bottom",

      onEnter: () => {
        gsap.fromTo(".word", { y: "100%"},{y:"0%", stagger: .01, duration: .3})
        
      },
      onLeaveBack: () => {
        gsap.to(".word", { y: "100%",})

      },
      onLeave:() =>{

      },
      onEnterBack: ()=> {
        console.log('entered back')

      }
    });

    return () => {
      trigger.kill(); 
    }
  })

  return (
    <main className='relative flex justify-center items-center min-h-[800px] bg-white'>
          <div className='flex flex-wrap mt-14 mx-[5vw] justify-left'>
              {words.map((word,idx) => (
            <div className='parent flex w-fit h-fit mr-2 overflow-hidden'>
                 <div className='word md:text-3xl text-[6vw] text-stone-900 leading-normal font-semibold primary-font transform translate-y-10'>
                  {word}
               </div> 
           </div>
              ))}
          </div>
    </main>
  )
}

export default Services