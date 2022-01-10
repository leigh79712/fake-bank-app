import { useDark, ThemeContext } from "hooks/useDark";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const { dark, switchTheme } = useDark();

  return (
    <ThemeContext.Provider value={{ dark, switchTheme }}>
      <Header />
      {children}
      <Footer />
    </ThemeContext.Provider>
  );
};

export default Layout;
