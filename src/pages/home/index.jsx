import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Header from '../../component/header'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'
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
      scale: 1.09,
      filter:'blur(5px)',
      y:'100%',
       ease:[0.76, 0, 0.24, 1],
      opacity: 0,
      scrollTrigger:{
        trigger: home.current,
        start: 'top+=20% top',
        end: 'bottom top+=20%',
        scrub: true,
        markers:true
      }
    })
  }, [])


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
    <PageAnimator>
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
        className='w-full self-center flex justify-center items-center flex-col'>
          <h1 
          className='text-3xl text-center font-bold uppercase'>transform your visions <br />  into digital masterpiece 
          </h1>
        </div >

        <div>
        <h3></h3>
        </div>
        </section>
       <section
        className='min-h-[800px] bg-stone-200 z-10 rounded-t-3xl  '
        id='about'
         ref={about}>
                          <h1 className='text-3xl'>About</h1>
        </section>

        <section
        id='services'
        ref={services}
       className='min-h-[800px] bg-stone-300 z-10 rounded-t-3xl  '>
                 <h1 className='text-3xl'>Services</h1>
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
    </PageAnimator>
  )
}

export default Home