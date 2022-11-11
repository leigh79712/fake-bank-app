import { StrictMode, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "styles/index";
import { lightTheme, darkTheme } from "styles/theme";
import { Layout } from "components/Common";
import useSWR from "swr";

const App = ({ Component, pageProps }) => {
  // const { session } = pageProps;
  // const [theme, setTheme] = useState("light");
  // const [loggedIn, setLoggedIn] = useState(false);

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     window.localStorage.setItem("theme", "dark");
  //     setTheme("dark");
  //   } else {
  //     window.localStorage.setItem("theme", "light");
  //     setTheme("light");
  //   }
  // };
  // const { data, err } = useSWR("/api/user", async function (args) {
  //   const res = await fetch(args);
  //   return res.json();
  // });

  // useEffect(() => {
  //   if (!data) {
  //     setLoggedIn(false);
  //   }
  //   if (data) {
  //     setLoggedIn(true);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem("theme");
  //   localTheme && setTheme(localTheme);
  // }, []);

  return (
    <StrictMode>
      <div>
        <input type="text" />
        <input type="password" />
        <button>註冊</button>
      </div>
    </StrictMode>
  );
};

export default App;
