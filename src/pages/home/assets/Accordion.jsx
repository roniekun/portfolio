import React, { useRef, useState, useEffect, useContext } from "react";
import { questions } from "../utils/question";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../../context/ThemeContext";

const Accordion = () => {
  const [isActive, setActive] = useState(questions.map(() => false));
  const { bg, textColorPrimary } = useContext(ThemeContext);

  const handleClick = (idx) => {
    setActive((prevArray) => {
      const updatedArray = [...prevArray];
      updatedArray[idx] = !updatedArray[idx];
      return updatedArray;
    });
  };

  return (
    <section
      className={`${textColorPrimary} ${bg} relative h-auto w-full flex flex-col font-primary z-20   p-[5vw] lg:p-[20vw]`}
    >
      <h1 className="mt-5 font-semibold md:text-2xl text-lg relative self-center my-10">
        <span className="text-lime-500">Questions? </span>
        Answer.
      </h1>
      {questions.map((data, idx) => (
        <div
          key={idx}
          className={`flex flex-col  lg:py-5 py-2 overflow-hidden  justify-center 
                  bg-opacity-15 border-gray-300 border-t ${
                    idx === 0 && "border-t-0 pt-2"
                  } `}
        >
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            className="group flex justify-start items-center cursor-pointer my-2"
          >
            <h2
              className={`cursor-pointer text-lg font-medium text-left leading-relaxed transition duration-300  font-base   ${
                isActive[idx] && "text-lime-500"
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
            <li className="text-lg text-left leading-normal  md:text-lg list-none md:mt-5 mt-3">
              {data.answer}
            </li>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
