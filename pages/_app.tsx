import { StrictMode, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ThemeContext, useTheme } from "hooks/useTheme";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const { theme, type, handleTheme } = useTheme();

  return (
    <StrictMode>
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
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeContext.Provider value={{ theme, type, handleTheme }}>
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </Hydrate>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default appWithTranslation(App);
