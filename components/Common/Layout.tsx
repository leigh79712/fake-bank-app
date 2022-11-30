import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface LayoutProps {
  title?: string;
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];
  const page = pathname === "" ? "home" : pathname;
  const { t } = useTranslation(page);
  const titleText = `Petit Bank | ${t("head")}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta property="og:title" content={titleText} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
