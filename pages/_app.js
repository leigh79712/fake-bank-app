import { StrictMode, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "styles/index";
import { lightTheme, darkTheme } from "styles/theme";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  const [dark, setDark] = useState(false);
  const switchTheme = () => setDark(!dark);

  return (
    <StrictMode>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout switchTheme={switchTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
