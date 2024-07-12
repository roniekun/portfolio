import React from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Theme = () => {
  const { toggleThemeFn, theme } = useContext(ThemeContext);
  const { name } = theme;

  return (
    <button className=" uppercase font-bold" onClick={toggleThemeFn}>
      Night Mode : {name === "dark" ? " On" : "off"}
    </button>
  );
};

export default Theme;
