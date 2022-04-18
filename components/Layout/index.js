import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ themeState, toggleTheme, loggedIn, data, ...props }) => {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        themeState={themeState}
        toggleTheme={toggleTheme}
        data={data}
      />
      <main loggedIn={loggedIn}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
