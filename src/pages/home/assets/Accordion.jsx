import React, { useRef, useState, useEffect } from 'react';
import { questions } from '../utils/question';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = () => {

    const [isActive, setActive] = useState(questions.map(() => false));

    const handleClick = (idx) => {
        setActive((prevArray)=>{
            const updatedArray = [...prevArray]
            updatedArray[idx] = !updatedArray[idx]
            return updatedArray
        })
    };

    return (
        <main className='h-auto w-full flex flex-col'>
            {questions.map((data, index) => (
                <div key={index} className='flex flex-col gap-2 lg:mt-5 mt-2 overflow-hidden  justify-center rounded-lg lg:px-5 px-2 md:py-5 py-3 bg-neutral-50 bg-opacity-15'>
                    <span className='text-sm border rounded-lg border-gray-600 px-1 mx-2 w-fit text-gray-400'>
                    #0{index+1}</span>             
                    <div 
                    key={index}
                    onClick={() =>  handleClick(index)} 
                    className='group flex justify-start items-center cursor-pointer'>

                        <h2
                            className='cursor-pointer text-base font-medium text-left leading-relaxed md:text-xl font-base px-2 text-gray-50'>
                             {data.question}
                        </h2>
                    </div>
                    <motion.div 
                    animate={{height: isActive[index]? 'auto' : '0'}}
                    transition={{ease: [0.87, 0, 0.13, 1], duration: .5}}
                    // ref={(el) => (answers.current[index] = el)}
                    className='transition h-0 duration-300 rounded-md  self-end'>
                        <h3 className=' text-stone-300 text-base text-left leading-normal px-2  md:text-lg md:mt-5 mt-3' >{data.answer}</h3>
                    </motion.div>
                  {/* { index !== questions.length-1 && <span className='h-[1px] w-full bg-neutral-700'/>} */}
                </div>
            ))}
        </main>
    );
};

export default Accordion;