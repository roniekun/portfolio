import { createContext, useState, useEffect } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  });
  //custom themes
  const textColorPrimary = isDarkTheme
    ? "text-neutral-200"
    : "text-neutral-900";
  const textColorSecondary = isDarkTheme
    ? "text-neutral-700"
    : "text-neutral-300";
  const borderColor = isDarkTheme ? "border-lime-100" : "border-neutral-900";
  const bg = isDarkTheme ? "bg-neutral-900" : "bg-neutral-100";

  const toggleThemeFn = () => {
    const newTheme = !isDarkTheme;
    console.log(newTheme);
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        setIsDarkTheme,
        isDarkTheme,
        toggleThemeFn,
        textColorPrimary,
        textColorSecondary,
        bg,
        borderColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
