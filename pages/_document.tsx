import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=1024, maximum-scale=1.0, initial-scale=1, user-scalable=1"
        />
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Make your life easier" />
        <meta property="og:site_name" content="Petit Bank" />
        <meta property="og:description" content="Make your life easier" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://fake-bank-app-leigh79712.vercel.app/"
        />
      </Head>
      <body className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
