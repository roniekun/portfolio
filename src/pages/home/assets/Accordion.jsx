import React, { useRef, useState, useEffect } from "react";
import { questions } from "../utils/question";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () => {
  const [isActive, setActive] = useState(questions.map(() => false));

  const handleClick = (idx) => {
    setActive((prevArray) => {
      const updatedArray = [...prevArray];
      updatedArray[idx] = !updatedArray[idx];
      return updatedArray;
    });
  };

  return (
    <main className="h-auto w-full flex flex-col">
      {questions.map((data, idx) => (
        <div
          key={idx}
          className={`flex flex-col gap-1  mt-2 overflow-hidden  justify-center 
                lg:px-5 md:py-1 bg-opacity-15 border-gray-500 border-b ${
                idx === 0 && "border-t pt-2"} `}
        >
          <span
            className={`text-sm border rounded-lg border-gray-600 px-1 mt-1 transform duration-300 md:mx-1 w-fit text-blue-50 ${
              isActive[idx] && "text-lime-500 border-lime-500"
            }`}
          >
            #0{idx + 1}
          </span>
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            className="group flex justify-start items-center cursor-pointer mb-2"
          >
            <h2
              className={`cursor-pointer text-base font-medium text-left leading-relaxed transition duration-300 md:text-lg font-base md:px-1 md:mt-5  ${
                isActive[idx] ? "text-lime-500" : "text-blue-100"
              }`}
            >
              {data.question}
            </h2>
          </div>
          <motion.div
            animate={{ height: isActive[idx] ? "auto" : "0" }}
            transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
            // ref={(el) => (answers.current[idx] = el)}
            className="transition h-0 duration-300 rounded-md  self-end"
          >
            <li className="text-stone-300 text-sm text-left leading-normal px-2  md:text-base list-none md:mt-5 mt-3 mb-2">
              {data.answer}
            </li>
          </motion.div>
          {/* { idx !== questions.length-1 && <span className='h-[1px] w-full bg-neutral-700'/>} */}
        </div>
      ))}
    </main>
  );
};

export default Accordion;
