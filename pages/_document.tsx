import { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default function Document() {
  const currentLocale = i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head />
      <body className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
