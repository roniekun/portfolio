import { createContext, useState, useEffect } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  //custom themes
  const light = {
    name: "light",
    textColorPrimary: "#171717", //text-neutral-900
    textColorSecondary: "#262626", //text-neutral-800
    borderColor: "#171717", //"border-neutral-900",
    bg: "#F5F5F5",
  };

  const dark = {
    name: "dark",
    textColorPrimary: "#E5E5E5", //text-neutral-200
    textColorSecondary: "#A3A3A3", //text-neutral-400
    borderColor: "#A3A3A3", ////bg-neutral-400
    bg: "#171717", //bg-neutral-900
  };

  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || light;
  });

  const toggleThemeFn = () => {
    setTheme(theme.name === "light" ? dark : light);
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const [isLoadedTheme, setIsLoadedTheme] = useState(false);
  const [loadedTheme, setLoadedTheme] = useState({
    loadedBg: undefined,
    loadedTextColor: undefined,
  });

  const loadThemeFn = (theme) => {
    setLoadedTheme(theme);
    console.log(theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        theme,
        dark,
        light,
        isLoadedTheme,
        setIsLoadedTheme,
        toggleThemeFn,
        loadThemeFn,
        loadedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
