import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "hooks/useTheme";
import { System, Sun, Moon } from "components/common/Icons";

const themes = [
  {
    title: "System",
    Icon: System,
  },
  {
    title: "Light",
    Icon: Sun,
  },
  {
    title: "Dark",
    Icon: Moon,
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { useThemeContext } = useTheme();
  const { theme, type, handleTheme } = useThemeContext;
  const { t } = useTranslation("common");
  const changeLocale = router.locale === "tw" ? "en" : "tw";

  const handleShow = () => {
    setShow(!show);
  };

  const setTheme = (theme: string) => {
    handleTheme(theme);
    setShow(!show);
  };

  const getTheme = (theme: string) => {
    if (theme === "Light")
      return <Sun className="w-5 h-5 fill-slate-800 dark:fill-white" />;
    else if (theme === "Dark")
      return <Moon className="w-5 h-5 fill-slate-800 dark:fill-white" />;
    else return <System className="w-5 h-5 fill-slate-800 dark:fill-white" />;
  };

  return (
    <header>
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link href="/">
          <Image
            src={`/images/logo-${type}.svg`}
            alt="Petit Bank"
            width={200}
            height={40}
          />
        </Link>
        <nav className="text-center">
          {/* <Link className="mx-10" href="/">
            Home
          </Link>
          <Link className="mx-10" href="/feature">
            Feature
          </Link>
          <Link className="mx-10" href="/operations">
            Operations
          </Link> */}
        </nav>
        <div className="text-right flex items-center">
          <Link href="/login" className="mr-5">
            {t("login")}
          </Link>
          <Link href={router.pathname} locale={changeLocale} className="mr-5">
            {t("translateTo")}
          </Link>
          <div className="relative">
            <div className="cursor-pointer" onClick={handleShow}>
              {getTheme(theme)}
            </div>
            {show && (
              <div className="mt-1 pointer-events-auto w-36 space-y-1 rounded-lg bg-white dark:bg-slate-900 p-3 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 absolute left-1/2 -translate-x-1/2">
                {themes.map((theme) => (
                  <div
                    className="flex rounded-[10px] p-1 cursor-pointer"
                    key={theme.title}
                    onClick={() => setTheme(theme.title)}
                  >
                    <div className="flex w-6 h-6 flex-none items-center justify-center rounded-md bg-white dark:bg-slate-900 shadow ring-1 ring-slate-900/10">
                      <theme.Icon className="w-4 h-4 fill-cyan-500 dark:fill-white" />
                    </div>
                    <div className="ml-3 text-black dark:text-white">
                      {theme.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
