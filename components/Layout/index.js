import { useGlobal, GlobalContext } from "hooks/useGlobal";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const { dark, switchTheme } = useGlobal();

  return (
    <GlobalContext.Provider value={{ dark, switchTheme }}>
      <Header />
      {children}
      <Footer />
    </GlobalContext.Provider>
  );
};

export default Layout;
