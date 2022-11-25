import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: [React.ReactElement, React.ReactElement];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
