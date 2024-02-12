import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const Nav = forwardRef(({refs},  ref)=> {
    const button = useRef(null)
    const [height, setHeight] = useState()


    let { id } = useParams()
     useImperativeHandle(ref, () => ({
      refs
    }));

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
    
    return (
        <main className='gap-14 flex items-center  relative  justify-center h-full'>
            {links.map((link,index) => (
                <div
                ref={button}
                 className={`relative flex justify-center items-center flex-col cursor-pointer group ${index === links.length-1 ? 'border rounded-md border-black  transition duration-300 hover:bg-black hover:text-gray-50 h-1/2 ease-in-out-expo' : ''}`}>
                <Link
                to={link.to}
                style={{ height: index === links.length - 1 ? `${height}px` : '' }}
                className={`cursor-pointer secondary-font text-sm relative flex flex-col group justify-center uppercase items-center ${index === links.length-1 ? 'px-10' : '' }`}
                key={link.name}>
                    {link.name} 
                    {index !== links.length-1 &&
                    <span key={link} className={`absolute -bottom-0 h-[1px] w-full  bg-zinc-700 rounded-lg scale-x-0 origin-right group-hover:origin-left  group-hover:scale-x-100 transition duration-300 ease-in-out-quart`}> 
                    {/* ${location.pathname===link.to ? 'scale-x-100': 'scale-x-0'} */}
                    </span>}

                </Link>
                </div>
            ))}
        </main>
    );
});

export default Nav;
