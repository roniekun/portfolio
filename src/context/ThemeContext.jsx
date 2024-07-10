import { createContext, useState, useEffect } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  });
  //custom themes
  let textColorPrimary = isDarkTheme ? "text-neutral-200" : "text-neutral-900";
  let textColorSecondary = isDarkTheme
    ? "text-neutral-500"
    : "text-neutral-800";
  let borderColor = isDarkTheme ? "border-lime-100" : "border-neutral-900";
  let bg = isDarkTheme ? "bg-neutral-900" : "bg-neutral-100";

    const [loadedTheme, setLoadedTheme] = useState({ loadedBg: bg, loadedTextColor:textColorPrimary });


  const toggleThemeFn = () => {
    const newTheme = !isDarkTheme;
    console.log(newTheme);
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };
  const loadThemeFn = (theme) => {
    setLoadedTheme(theme)
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
        loadThemeFn,
        loadedTheme,
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
