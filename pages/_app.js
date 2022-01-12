import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles";
import { useGlobal } from "../hooks/useGlobal";
import { lightTheme, darkTheme } from "../styles/theme";

const App = ({ Component, pageProps }) => {
  const { dark } = useGlobal();

  return (
    <React.StrictMode>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
