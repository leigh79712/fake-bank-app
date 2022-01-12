import { useState, createContext } from "react";

export const useGlobal = () => {
  const [dark, setDark] = useState(false);
  const switchTheme = () => setDark(!dark);
  return { dark, switchTheme };
};

export const GlobalContext = createContext();
