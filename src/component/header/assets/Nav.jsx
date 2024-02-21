import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle, useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const Nav = forwardRef(({refs},  ref)=> {
    const button = useRef(null)
    const [height, setHeight] = useState()
    const { color } = useContext(DataContext)


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
                 className={`relative flex justify-center items-center flex-col cursor-pointer group`}>
                <Link
                to={link.to}
                className={`primary-font mix-blend-difference font-medium cursor-pointer text-sm relative flex flex-col group justify-center uppercase 
                items-center`}
                key={link.name}>
                    {link.name} 
                    <span key={link} className={`absolute -bottom-[1px] h-[1px] w-full  bg-zinc-700 rounded-lg scale-x-0 origin-right group-hover:origin-left  group-hover:scale-x-100 transition tracking-tight duration-300 ease-in-out-quart`}> 
                    {/* ${location.pathname===link.to ? 'scale-x-100': 'scale-x-0'} */}
                    </span>

                </Link>
                </div>
            ))}
        </main>
    );
});

export default Nav;
