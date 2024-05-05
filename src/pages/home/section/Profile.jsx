import React, {useRef, useEffect} from 'react'
import Avatar from '../assets/Avatar'
import splitString from '../../../assets/anim/SplitStrings'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Profile = () => {
    const profile = useRef(null)
    const avatarChars = useRef([])
    const text2 =  splitString("A front-end developer advancing to transform your visions into Digital Masterpiece")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)


    const trigger = ScrollTrigger.create({
      trigger: profile.current,
      start: "top top+=100px",
      end: "bottom bottom",
      onEnter: () => {
        avatarChars.current.forEach((el) => {
        const randomDelay = Math.random(.3, 3) 
        gsap.to(el, {
            opacity: 1,
            duration: .3,
            delay: randomDelay
        });
        });
        
      },
      onLeaveBack: () => {
        avatarChars.current.forEach((el) => {
        gsap.to(el, {
            opacity: 0
        });
        });

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

  }, [avatarChars.current]);

  return (
    <main 
        ref={profile}
        className='w-full flex justify-center gap-y-5 items-center flex-col py-20 bg-black'>
         <div className=''>
         <Avatar />
         </div>
         <div className='flex items-center w-fit m-[5%] lg:w-[50%]'> 
          <h3
          className='md:text-2xl text-xl leading-8 md:leading-normal   font-medium mx-2  text-center w-full  font-primary'>
               {text2.map((char, index) => (
                <span className={`opacity-0 ${index > text2.length - 21 ? 'text-blue-600' : 'text-blue-50' }`} key={index}  ref={(el) => (avatarChars.current[index] = el)} >
                {char}{index === text2.length - 21  && <br/>}
      </span>
       ))}
          </h3>
        </div>
        </main>
  )
}

export default Profile