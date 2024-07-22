import React, { useRef, useState, useEffect, useContext } from "react";
import { questions } from "../utils/question";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../../context/ThemeContext";
import { GrAdd } from "react-icons/gr";

const Accordion = () => {
  const [isActive, setActive] = useState(questions.map(() => false));
  const {
    theme: { bg, textColorPrimary },
  } = useContext(ThemeContext);

  const handleClick = (idx) => {
    setActive((prevArray) => {
      const updatedArray = [...prevArray];
      updatedArray[idx] = !updatedArray[idx];
      return updatedArray;
    });
  };

  return (
    <section
      style={{ color: textColorPrimary, background: bg }}
      className={` relative h-auto w-full flex flex-col font-primary  p-[5vw] lg:p-[25vw] py-[10vh]`}
    >
      <h1 className="mt-5 font-semibold md:text-2xl text-xl relative self-center my-10">
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
            className="group flex items-center cursor-pointer my-2 justify-between gap-x-5"
          >
            <h2
              className={` w-full cursor-pointer text-lg font-medium text-left leading-relaxed transition duration-300  ${
                isActive[idx] && "text-lime-500"
              }`}
            >
              {data.question}
            </h2>
            <GrAdd
              className={` flex transition-transform duration-300 text-lg ${
                isActive[idx] && "rotate-45"
              }`}
            />
          </div>
          <motion.div
            animate={{ height: isActive[idx] ? "auto" : "0" }}
            transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
            // ref={(el) => (answers.current[idx] = el)}
            className="transition h-0 duration-300 rounded-md  self-end"
          >
            <li
              className={`text-lg text-left leading-normal  md:text-lg list-none md:mt-5 mt-3 opacity-0 transition-opacity duration-1000 mb-3  ${
                isActive[idx] && "opacity-100"
              }`}
            >
              {data.answer}
            </li>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
