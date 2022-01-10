import { useState, createContext } from "react";

export const useDark = () => {
  const [dark, setDark] = useState(false);
  const switchTheme = () => setDark(!dark);
  return { dark, switchTheme };
};

export const ThemeContext = createContext();
