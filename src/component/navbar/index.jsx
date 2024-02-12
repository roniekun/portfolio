import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import gsap from 'gsap'
import Socials from './assets/Socials'
import Close from './assets/Close'
import { Timeline } from 'gsap/gsap-core'

const Navbar = () => {
    const {setToggleMenu, isToggleMenu, setLoading, isLoading} = useContext(DataContext)
    const menu = useRef(null)
    const linkItems= useRef(null)
    const socialsRef = useRef(null);  

    const links = [
         { name: 'about', to: '/about' },
        { name: 'services', to: '/services'},
        { name: 'works', to: '/works' },
        { name: 'contact', to: '/contact' },
    ];

    useEffect(() => {
        gsap.registerPlugin(Timeline)
        const tl = gsap.timeline()
    
        if (isToggleMenu) {
         document.body.style.overflow = 'hidden'
        tl.to(menu.current, {
             duration: .7,
            height: '100vh',
            ease: 'power1.in',
             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }, 
             tl.to(linkItems.current, {
            opacity:1,
            ease: 'power2.in',
            scale: 1
             },'+=.4',),
        )
        }
        else {
         document.body.style.overflow = 'scroll'
        tl.to(linkItems.current, {
                        scale: 1.1,
                        duration: 1,
                        rotate: -5,
                         ease: 'power2.in',
                         transformOrigin: '-5% -5%',
        },'-=.3')

        tl.to(menu.current, {
            ease: 'power2.inOut',
            height:'0',
            clipPath:'polygon(0 0, 100% 0, 100% 49%, 0 16%)',
           onComplete: () =>{
                linkItems.current.style.opacity = 0;
                linkItems.current.style.transform = 'rotate(0deg) translateY(-50%)';
            }
        },'-=.5')
             tl.to(linkItems.current, {
            scale: 1,
            rotate: 0
             })
        }

    }, [isToggleMenu]);

    const handleClick = () => {
        setToggleMenu(!isToggleMenu)
        setLoading(!isLoading)
    }

  return (
    <nav
     ref={menu}
     className='fixed w-screen flex  bg-stone-800 brightness-90 h-0 flex-col items-start justify-around  overflow-hidden z-50'>

    <section className='absolute z-10 top-[3vw] right-[3vw]'>
        <Close />
    </section>

        <section
          ref={linkItems}
          className='flex flex-col w-fit justify-center relative items-start text-xl h-auto gap-7 mx-[10vw] opacity-0'>
        
                {links.map((link, index) => (
                <div className='flex w-fit justify-center relative items-center gap-5 group '>
                    <Link
                    to={link.to}
                    onClick={handleClick}
                    className={`text-gray-50 z-10 relative bg-transparent cursor-pointer text-[6vh] font-md capitalize title-font flex text-balance h-[5vh] w-fit select-none ${link.to===location.pathname ? 'text-orange-500' : 'text-gray-50'} `}
                    key={link.name}>
                     {link.name} 
                                    {/* <span className={`absolute -bottom-1 h-[3px] w-full  
                                    ${link.to===location.pathname ? 'bg-orange-500' : 'bg-gray-100'} rounded-lg scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left`}></span> */}
                    </Link>
                 </div>
            ))}

        </section>
    <section>
            <Socials ref={socialsRef} /> 
    </section>
    </nav>
  )
}

export default Navbar