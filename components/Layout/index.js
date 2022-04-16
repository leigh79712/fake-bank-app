import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({
  themeState,
  toggleTheme,
  loggedIn,
  setLoggedIn,
  data,
  children,
}) => {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        themeState={themeState}
        toggleTheme={toggleTheme}
        data={data}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
