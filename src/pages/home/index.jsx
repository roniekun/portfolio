import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Header from '../../component/header'
import Footer from '../../component/footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  const { user, setTitle, setColor, color } = useContext(DataContext)
  const cards = useRef(null)
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
        },300);
    } 
    }
    );
  }, [])

    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    tl.to(hero.current,{
      y:'100%',
       ease:[0.76, 0, 0.24, 1],
       opacity:.1,
      scrollTrigger:{
        trigger: home.current,
        start: 'top+=20% top',
        end: 'bottom-=20% top+=10%',
        scrub: true,
      }
    })
    gsap.to(home.current,{
      duration:1,
      scrollTrigger:{
        trigger:home.current,
        start: 'center top',
        end:'bottom top',
      }}
      )

  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: about.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        setColor('lightgray')
        console.log(color)
      },
      onLeaveBack: () =>{
        setColor('black')
      },
      onEnterBack: ()=> {
      setColor('lightgray')

      }
    });
    return () => {
      trigger.kill(); 
    };
  }, [about,color]); 
  

  return (
      <motion.main 
        className='relative flex flex-col'>
        <section className='z-20'>
       <Header refs={refsArray} />
        </section>
        <section 
        ref={home}
        className='min-h-[800px] flex flex-col  bg-stone-100 p-[5vw] lg:gap-y-2 justify-center
         items-center z-0 overflow-hidden'>
        <div 
        ref={hero}
        className='w-full self-center flex j flex-col gap-y-3'>
        <h1 className='text-4xl text-balance tracking-tight  font-semibold uppercase primary-font'>
          Good to see you,  i'm Ronie.
        </h1>
          <h3
          className='text-xl text-gray-700 font-base leading-tight mx-2 secondary-font'>
          A front-end developer advancing to transform your visions  into  digital masterpiece.
          </h3>
        </div >

        <div>
        <h3></h3>
        </div>
        </section>
       <section
        className='z-10 rounded-t-3xl min-h-[800px]'
        id='about'
         ref={about} 
         >
         <div className='p-[5vw] flex flex-col  bg-zinc-950 rounded-t-3xl h-[800px] '>
              <h1 className='text-2xl uppercase primary-font self-center mt-10 mb-20 leading-tight font-bold text-gray-200'>
                   About me</h1>
              <div className='flex flex-col gap-y-5'>
              <h1 className='capitalize font-semibold text-xl primary-font text-gray-200'>Web development</h1>
            <p className='secondary-font text-lg lg:w-1/2 text-balance text-stone-400 leading-tight mb-10'>
            Adapting to the ever-evolving world of web development, crafting intuitive interfaces and functional websites
            that engage users and convey the essence of a brand or concept. </p>
              </div>

            <div className='flex flex-col gap-y-5 '>
             <h1 className='capitalize font-semibold text-xl primary-font leading-snug text-gray-200'>exploring backend Technologies</h1>
             <p className='secondary-font text-lg lg:w-1/2 text-balance text-stone-400 leading-tight mb-10'>
                  My journey extends beyond frontend design; I continually explore and master back-end technologies, databases,
                  and server management, to create end-to-end 
                  solutions that provide seamless functionality and deliver an exceptional user experience.
             </p>
            </div>
         </div>
        </section>
          
          <section
          id='services'
          ref={services}
          className=' bg-stone-300  rounded-t-3xl '>
          <div className='min-h-[800px]  bg-zinc-600 flex justify-center items-center'>
                              <h1 className='text-3xl'>Services</h1>
          </div>
            </section>

          <section
          ref={works}
          id='works'
            className='flex flex-col lg:gap-10 gap-5 z-10 rounded-t-3xl bg-stone-400 w-full box-border h-[800px]'>
            <div 
              ref={cards}
            className='w-full h-full bg-stone-500 overflow-auto'>
                             <h1 className='text-3xl'>Works</h1>

            </div>
        </section>



        <section 
        className='min-h-[800px] bg-stone-600 z-10'
        id='contact'
        ref={contact}>
          <h1 className='text-3xl'>Contact</h1>
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