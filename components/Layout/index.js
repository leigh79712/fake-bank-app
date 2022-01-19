import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ switchTheme, children }) => (
  <>
    <Header switchTheme={switchTheme} />
    {children}
    <Footer />
  </>
);

export default Layout;
