import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Nav = () => {
    const button = useRef(null)
    const [height, setHeight] = useState()

    const links = [
        { name: 'about', to: '/about' },
        { name: 'services', to: '/services'},
        { name: 'works', to: '/works' },
        { name: 'contact', to: '/contact' }
    ];

    useEffect(() => {
        if(button){
            const height = button.current.offsetHeight
            setHeight(height)
        }
    }, [button])

     const navigate = useNavigate()
     const handleClick = (link) => {
            navigate(link, {replace: true})
    }    
    return (
        <main className='gap-14 flex items-center  relative  justify-center h-full mx-10'>
            {links.map((link,index) => (
                <div
                ref={button}
                 className={`relative flex justify-center items-center flex-col cursor-pointer group`}>
                <a
                className={`primary-font mix-blend-difference font-medium cursor-pointer text-md relative flex flex-col group justify-center uppercase 
                items-center`}
                onClick={() => handleClick(link.to)}
                key={link.name}>
                    {link.name} 
                    <span key={link} className={`absolute -bottom-[1px] h-[1px] w-full  bg-black rounded-lg scale-x-0 origin-right group-hover:origin-left  group-hover:scale-x-100 transition tracking-tight duration-300 ease-in-out-quart`}> 
                    {/* ${location.pathname===link.to ? 'scale-x-100': 'scale-x-0'} */}
                    </span>

                </a>
                </div>
            ))}
        </main>
    );
};

export default Nav;
