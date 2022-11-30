import { StrictMode, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

// Create a client
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta
            name="viewport"
            content="width=1024, maximum-scale=1.0, initial-scale=1, user-scalable=1"
          />
          <link rel="shortcut icon" href="/images/favicon.svg" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Make your life easier" />
          <meta property="og:site_name" content="Petit Bank" />
          <meta property="og:description" content="Make your life easier" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://fake-bank-app-leigh79712.vercel.app/"
          />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </StrictMode>
  );
};

export default appWithTranslation(App);
