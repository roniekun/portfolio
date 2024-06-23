import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { DataProvider } from "./context/DataContext.jsx";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DataProvider>{children}</DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
