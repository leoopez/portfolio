/** @format */

import { useContext, createContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function ThemeProvider({ children }) {
  const [lan, setLan] = useState(false);

  const toggleLan = () => setLan(lan => !lan);
  return (
    <LanguageContext.Provider value={{ lan, toggleLan }}>
      {children}
    </LanguageContext.Provider>
  );
}
