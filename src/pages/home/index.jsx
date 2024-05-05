import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Profile from './section/Profile'
import About from './section/About'
import Works from './section/Works'
import Services from './section/Services'
import Accordion from './assets/Accordion'
import Footer from '../../component/footer'
import Contact from './section/Contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useParams } from 'react-router-dom'
import splitString from '../../assets/anim/SplitStrings'

const Home = () => {
  const { user, setTitle, setColor, color } = useContext(DataContext)
  const profile = useRef(null)
  const services = useRef(null)
  const about = useRef(null)
  const works = useRef(null)
  const contact = useRef(null)
  const footer = useRef(null)
  const home = useRef(null)
  const hero = useRef(null)
  const container = useRef(null)
  const refsArray = [ about, services, works, contact]
  let { id } = useParams()
  const heroText = "Good to see you, I'm Ronie"
  const heroChars = useRef([])

  useEffect(() => {
    location.title = 'Freelance'
    setTitle(`${location.title} - ${user.title} `)
  }, [location.pathname])
  
 useEffect(() => {
    refsArray.forEach((ref) => {
      if(ref.current.id === id){
        setTimeout(() => {
       ref.current.scrollIntoView({behavior:'smooth'})
        setTitle(`${id.charAt(0).toUpperCase()+id.slice(1)} - ${user.title}`)
        },100);
    } 
    }
    );
  }, [id])

  useEffect(() => {
    heroChars.current.forEach((el) => {
      const randomDelay = Math.random(.3, 3) 
      gsap.to(el, {
        opacity: 1,
        duration: .3,
        delay: randomDelay
      });
    });

  }, [heroChars.current]);

    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    tl.to(hero.current,{
      y:'50%',
       ease:[0.76, 0, 0.24, 1],
       opacity:.5,
      scrollTrigger:{
        trigger: home.current,
        start: 'top+=20% top',
        end: 'bottom-=20% top+=10%',
        scrub: true,
      }
    })
    tl.fromTo(home.current,{
          filter:'brightness(100%)',
    },
      {
        filter:'brightness(0%)',
        scrollTrigger:{
            trigger:hero.current,
            start: 'center top',
            end:'bottom+=600px top',
            scrub:true,
      }
      }
      )

  }, [,hero,home,container])

  const text = splitString(heroText)

  return (
      <motion.main
        ref={container}
        className='relative flex flex-col top-0'>
        <section 
        ref={home}
        className='flex flex-col  bg-stone-100 p-[5vw] lg:gap-y-2 justify-center h-screen
         items-center z-0 overflow-hidden'>
        <div 
          ref={hero}
          className='w-full self-center flex gap-y-3' >
            <h1
             className='text-4xl tracking-normal font-bold uppercase font-primary text-balance'>
               {text.map((char, index) => (
                <span
                 className='opacity-0' key={index}  ref={(el) => (heroChars.current[index] = el)} >
                {char}{index === 15 && <br/>}</span>
               ))}
            </h1>
   
        </div>
        <span 
        onClick={() => profile.current.scrollIntoView({ behavior: "smooth" })}
        className='absolute bottom-20 cursor-pointer  text-sm font-base font-primary tracking-10 border rounded-3xl px-3 py-2'>
         scroll to explore</span>
        </section>

        <section ref={profile}>
          <Profile />
        </section>

       <section
        className='min-h-[800px]'
        id='about'
         ref={about} >
            <About />
        </section>

          <section
          id='services'
          ref={services}
          className='flex min-h-[800px] flex-col  bg-zinc-300'>
          <Services />
            </section>

          <section
          ref={works}
          id='works'
            className='flex flex-col lg:gap-10 gap-5 z-10 rounded-t-3xl bg-stone-400 w-full box-border min-h-[800px]'>
            <Works/>
        </section>

          <section className='mx-[5vw] gap-5 flex flex-col justify-center items-center font-secondary  py-[5vw]'>
          <h1 className='mt-5 font-semibold text-sm font-primary'>FAQ's</h1>
            <Accordion />
          </section>

        <section 
        className='min-h-[800px] z-10 flex justify-center bg-neutral-100'
        id='contact'
        ref={contact}>
        <Contact />
        </section>

      
      {/* footer */}
      <section 
      ref={footer}
      className='z-10'>
      <div></div>
        <div className='lg:col-span-2 sm:w-full'>
              <Footer />
        </div>
      </section>
    </motion.main>
  )
}

export default Home