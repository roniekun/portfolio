import { useParams, Link, useLocation } from 'react-router-dom'
import { lettersComp } from '../../utils/letters'
import { useContext, useRef   } from 'react'
import { DataContext } from '../../context/DataContext'
import Socials from './assets/Socials'
import Clock from './assets/Clock'

const Navbar = () => {
    const {setToggleMenu, isToggleMenu, setLoading, isLoading} = useContext(DataContext)
    const linkArray = useRef([])
    const location = useLocation()
    const menu = useRef(null)
    const linkItems= useRef(null)
    const socialsRef = useRef(null);  

    const links = [
         { name: 'about', to: '/about' },
        { name: 'services', to: '/services'},
        { name: 'works', to: '/works' },
        { name: 'contact', to: '/contact' },
    ];

    const handleClick = () => {
        setToggleMenu(!isToggleMenu)
        setLoading(!isLoading)
    }
        const handleMouseEvent = (i, event) => {
            linkArray.current.forEach((linkRef, index)=>{
                if(i===index){
                 let interval = null
                let iteration = 0;
                clearInterval(interval);
                 interval = setInterval(() => {
                linkRef.textContent = linkRef.textContent.split("")
                .map((letter, index) => {
                    if(index < iteration) {
                    return event.target.dataset.value[index];
                    }
                    return lettersComp[Math.floor(Math.random() * 52)]
                })
                .join("");
                
                if(iteration >= linkRef.textContent.length){ 
                clearInterval(interval);
                }
                iteration += 1/2 ;
            }, 30);
                }

            })

            }

  return (
    <nav
     ref={menu}
     className='relative w-full flex h-full  brightness-90 flex-col gap-16 items-start justify-start overflow-hidden z-50 py-[10vw]'>
  
        <section
          ref={linkItems}
          className='flex flex-col w-fit justify-start relative items-start text-xl h-auto gap-7 mx-[10vw] opacity-1'>
        
                {links.map((link, index) => (
                <div className='flex w-fit justify-start relative items-start group  overflow-hidden'>
                    <Link
                    to={link.to}
                    data-value={link.name}
                    ref={(el) => (linkArray.current[index] = el)}
                    onMouseEnter={(e)=> handleMouseEvent(index, e)}
                    onMouseLeave={(e)=> handleMouseEvent(index, e)}
                    onClick={handleClick}
                    className={`z-10 relative bg-transparent cursor-pointer text-[4vh] font-medium capitalize primary-font
                     flex text-balance h-[4vh] w-fit select-none ${link.to===location.pathname ? 'text-lime-400' : 'text-black'} `}
                    key={link.name}>
                     {link.name} 
                                    {/* <span className={`absolute -bottom-1 h-[3px] w-full  
                                    ${link.to===location.pathname ? 'bg-orange-500' : 'bg-gray-100'} rounded-lg scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left`}></span> */}
                    </Link>
                 </div>
            ))}

        </section>
    <section className='flex flex-col gap-5 w-full'>
            <Socials ref={socialsRef} /> 
       <div className='flex flex-col gap-1 mx-[2vw] mt-[5vw] self-end w-32 '>
        <span className='uppercase text-black primary-font text-[11px]'>local time</span>
        <Clock /></div>
    </section>

    </nav>
  )
}

export default Navbar