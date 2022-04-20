import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ themeState, toggleTheme, loggedIn, data, ...props }) => {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        themeState={themeState}
        toggleTheme={toggleTheme}
        data={data}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
