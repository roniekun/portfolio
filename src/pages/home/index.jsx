import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Header from '../../component/header'
import Footer from '../../component/footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  const { user, setTitle } = useContext(DataContext)
  const cards = useRef(null)
  const services = useRef(null)
  const about = useRef(null)
  const works = useRef(null)
  const contact = useRef(null)
  const footer = useRef(null)
  const home = useRef(null)
  const hero = useRef(null)
  const refsArray = [ about, services, works, contact]
  const { id } = useParams()
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
       opacity:.5,
      scrollTrigger:{
        trigger: home.current,
        start: 'top+=20% top',
        end: 'bottom-=10% top+=10%',
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

// splitText


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: cards.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        console.log('entered')
        
      },
      onLeaveBack: () => {
        console.log('leave back')

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
    };
  }, [footer]); 
  

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
          A front-end developer advancing to transform your visions  into  <em>digital masterpiece.</em> 
          </h3>
        </div >

        <div>
        <h3></h3>
        </div>
        </section>
       <section
        className='z-10 rounded-t-3xl '
        id='about'
         ref={about}>
         <div className='p-[5vw]  bg-zinc-400 h-auto rounded-t-3xl overflow-scroll'>
         <div>
                          <h1 className='text-3xl uppercase mb-10 primary-font'>About me</h1>
                          <p className='secondary-font text-lg lg:w-1/2 text-balance text-gray-700 leading-snug mb-10'>Adapts to the ever-evolving world of web development, crafting captivating webpage and functional websites,  striving for visually appealing and intuitive interfaces that engage users and convey the essence of a brand or concept. Continuing to explore back-end technologies, databases, and server management, to create end-to-end solutions that provide seamless functionality and an exceptional user experience.I look forward to connecting with you and bringing your web development ideas to life. Let's create something extraordinary together!</p>
         </div>
         </div>
  
          <section
          id='services'
          ref={services}
          className=' bg-stone-300  rounded-t-3xl '>
          <div className='min-h-[800px]  bg-zinc-600 flex justify-center items-center'>
                              <h1 className='text-3xl'>Services</h1>
          </div>
            </section>
        </section>

          <section
          ref={works}
          id='works'
            className='flex flex-col lg:gap-10 gap-5 z-20 rounded-t-3xl bg-stone-400 w-full box-border h-[800px]'>
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