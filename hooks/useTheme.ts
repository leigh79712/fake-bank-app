import { useEffect, createContext, useContext, useState } from "react";

interface ThemeInterface {
  type: "dark" | "light" | string;
  theme: "System" | "Dark" | "Light" | string;
  handleTheme: (mode: string) => void;
}

export const ThemeContext = createContext<ThemeInterface>({
  type: "light",
  theme: "System",
  handleTheme: () => {},
});

export const useTheme = () => {
  const [theme, setTheme] = useState("System");
  const [type, setType] = useState("light");
  const useThemeContext = useContext(ThemeContext);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setType("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setType("light");
    }
  }, [theme]);

  const handleTheme = (mode: string) => {
    if (mode === "Light") {
      localStorage.theme = "light";
    } else if (mode === "Dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.removeItem("theme");
    }

    setTheme(mode);
  };

  return { theme, type, handleTheme, useThemeContext };
};
