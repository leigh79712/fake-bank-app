import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ themeState, toggleTheme, children }) => (
  <>
    <Header themeState={themeState} toggleTheme={toggleTheme} />
    {children}
    <Footer />
  </>
);

export default Layout;
