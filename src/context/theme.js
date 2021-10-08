/** @format */

import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    document.querySelector(".body").classList.toggle("dark");
    setTheme(theme => !theme);
  };
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
      className={theme ? "dark" : "light"}>
      {children}
    </ThemeContext.Provider>
  );
}
