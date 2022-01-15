import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import Header from "../Header";
import Footer from "../Footer";
import { lightTheme, darkTheme } from "styles/theme";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  const switchTheme = () => setDark(!dark);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Header dark={dark} switchTheme={switchTheme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
