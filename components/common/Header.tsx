import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "hooks/useTheme";
import { System, Sun, Moon, GlobeAlt } from "./Icons";
import Dropdown from "./Dropdown";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { useThemeContext } = useTheme();
  const { theme, type, handleTheme } = useThemeContext;
  const { t } = useTranslation("common");

  const memberMenu = [
    {
      text: t("memberCenter"),
      link: "/dashboard",
    },
    {
      text: t("transfer"),
      link: "/transfer",
    },
    {
      text: t("deposit"),
      link: "/deposit",
    },
    {
      text: t("withdraw"),
      link: "/withdraw",
    },
    {
      text: t("logout"),
      event: signOut,
    },
  ];

  const locales = [
    {
      text: "English",
      link: router.pathname,
      locale: "en",
    },
    {
      text: "繁體中文",
      link: router.pathname,
      locale: "tw",
    },
  ];

  const themes = [
    {
      text: "System",
      Icon: System,
      event: () => setTheme("System"),
    },
    {
      text: "Light",
      Icon: Sun,
      event: () => setTheme("Light"),
    },
    {
      text: "Dark",
      Icon: Moon,
      event: () => setTheme("Dark"),
    },
  ];

  const setTheme = (theme: string) => {
    handleTheme(theme);
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
            priority
            width={200}
            height={40}
          />
        </Link>

        <div className="text-right flex items-center">
          {session ? (
            <Dropdown
              className="mr-5"
              selected={`${t("hello")} ${session.user.username}`}
              items={memberMenu}
            />
          ) : (
            <Link href="/login" className="mr-5">
              {t("login")}
            </Link>
          )}
          <Dropdown
            selected={
              <GlobeAlt className="w-5 h-5 mr-5 stroke-slate-800 dark:stroke-white" />
            }
            items={locales}
          />
          <Dropdown selected={getTheme(theme)} items={themes} />
        </div>
      </div>
    </header>
  );
};

export default Header;
