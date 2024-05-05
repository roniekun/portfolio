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
        <main className='h-auto w-full flex flex-col gap-5'>
            {questions.map((data, index) => (
                <div key={index} className='flex flex-col gap-2 lg:mt-10 mt-2'>
                    <div className='group flex justify-start items-center'>
                    <span className='text-sm border rounded-lg border-gray-600 px-1 bg-lime-400 m-2 text-black'>
                    #0{index+1}</span>
                        <h2
                            key={index}
                            onClick={() =>  handleClick(index)} 
                            className='cursor-pointer text-base font-medium text-left md:text-lg font-base px-2 text-stone-950'>
                             {data.question}
                        </h2>
                    </div>
                    <motion.div 
                    animate={{height: isActive[index]? 'auto' : '0'}}
                    transition={{ease: [0.87, 0, 0.13, 1], duration: .5}}
                    // ref={(el) => (answers.current[index] = el)}
                    className='overflow-hidden  transition h-0 duration-300 flex rounded-md  self-end w-10/12'>
                        <h3 className=' text-stone-600 text-base text-left leading-snug md:text-lg' >{data.answer}</h3>
                    </motion.div>
                  { index !== questions.length-1 && <span className='h-[1px] w-full bg-stone-700'/>}
                </div>
            ))}
        </main>
    );
};

export default Accordion;