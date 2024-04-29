import {forwardRef ,useRef, useEffect, useImperativeHandle, useContext} from 'react';
import {linksData } from '../../../utils/data/linksData';
import { DataContext } from '../../../context/DataContext';

const Socials = forwardRef((_, ref) => {
    const { isToggleMenu } = useContext(DataContext)
    const socialRefs = useRef([]);

    useImperativeHandle(ref, () => ({
        socialRefs: socialRefs.current,
    }), [socialRefs]);

  return (
  <main 
    className="gap-x-5 gap-y-3 flex flex-wrap relative mx-[10vw]">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly group" 
        key={link.acn}>
          <a
           ref={(el) => (socialRefs.current[index] = el)}
            href={link.url}
            className={` hover:opacity-90 w-7 h-7 justify-center flex items-center fill-black transition group-hover:-translate-y-1   text-md text-gray-800 bg-blend-difference opacity-1 uppercasexl px-1`}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        </div>
      ))}
    </main>
  );
});

export default Socials;
