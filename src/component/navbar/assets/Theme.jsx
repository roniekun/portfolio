import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const Theme = () => {
  const { setDarkTheme, isDarkTheme } = useContext(DataContext);

  const handleClick = () => {
    setDarkTheme(!isDarkTheme);
  };
  return (
    <button className="font-primary " onClick={handleClick}>
      Night Mode : {isDarkTheme ? "ON" : "OFF"}
    </button>
  );
};

export default Theme;
