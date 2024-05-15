import React from "react";
import Gmail from "../../../assets/Gmail";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { TbSend } from "react-icons/tb";

const Button = () => {
  const { user } = useContext(DataContext);

  const handleClick = () => {
    Gmail(user);
  };
  return (
    <button
      onClick={handleClick}
      className="group flex items-center justify-center primary-font uppercase text-xs gap-2 font-bold hover:scale-105 transition transform text-black hover:text-white hover:bg-gray-800 focus:outline-none hover:shadow-lg hover7text-white focus:ring  focus:ring-offset-1 focus:ring-gray-300 border border-gray-900 rounded-md py-2 px-5"
    >
      <TbSend className="w-3 group-hover:stroke-white" /> Send Message
    </button>
  );
};

export default Button;
