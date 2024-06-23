import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Theme = () => {
  const { toggleThemeFn, isDarkTheme } = useContext(ThemeContext);


  return (
    <button className="font-primary " onClick={toggleThemeFn}>
      Night Mode : {isDarkTheme ? "ON" : "OFF"}
    </button>
  );
};

export default Theme;
