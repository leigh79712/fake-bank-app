import { StrictMode, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "styles/index";
import { lightTheme, darkTheme } from "styles/theme";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <StrictMode>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Layout themeState={theme} toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
