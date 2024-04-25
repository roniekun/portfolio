import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import About from './res/About'
import Works from './res/Works'
import Services from './res/Services'
import Footer from '../../component/footer'
import Contact from './res/Contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  const { user, setTitle, setColor, color } = useContext(DataContext)
  const services = useRef(null)
  const about = useRef(null)
  const works = useRef(null)
  const contact = useRef(null)
  const footer = useRef(null)
  const home = useRef(null)
  const hero = useRef(null)
  const refsArray = [ about, services, works, contact]
  let { id } = useParams()
  const navigate = useNavigate()

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
            end:'bottom+=800px top',
            scrub:true,
      }
      }
      )

  }, [,hero,home])

  return (
      <motion.main 
        className='relative flex flex-col top-0'>
        <section 
        ref={home}
        className='min-h-[800px] flex flex-col  bg-stone-100 p-[5vw] lg:gap-y-2 justify-center
         items-center z-0 overflow-hidden'>
        <div 
        ref={hero}
        className='w-full self-center flex j flex-col gap-y-3'>
        <h1 className='text-4xl tracking-tight  font-semibold uppercase primary-font text-balance'>
          Good to see you, <br /> I'm Ronie 
        </h1>
        <div className='flex gap-2 items-center w-fit whitespace-nowrap flex-nowrap'> 

            <span
          className='text-lg text-gray-700 font-medium leading-tight mx-2 secondary-font whitespace-normal w-3/4'>
          A frontend developer advancing to transform your visions  into  digital masterpiece.
          </span>
        </div>
        </div >
        <span className='absolute bottom-20  text-base font-base primary-font tracking-10 underline'> scroll to explore</span>
        </section>

       <section
        className='z-10 rounded-t-3xl min-h-[800px]'
        id='about'
         ref={about} >
            <About />
        </section>

          <section
          id='services'
          ref={services}
          className='flex min-h-[800px] flex-col  bg-zinc-600'>
          <Services />
            </section>

          <section
          ref={works}
          id='works'
            className='flex flex-col lg:gap-10 gap-5 z-10 rounded-t-3xl bg-stone-400 w-full box-border min-h-[800px]'>
            <Works/>
        </section>

        <section 
        className='min-h-[800px] bg-stone-600 z-10 flex justify-center'
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