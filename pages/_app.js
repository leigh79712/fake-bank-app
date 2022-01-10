import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles";
import { useDark } from "../hooks/useDark";
import { lightTheme, darkTheme } from "../styles/theme";

const App = ({ Component, pageProps }) => {
  const { dark } = useDark();

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
