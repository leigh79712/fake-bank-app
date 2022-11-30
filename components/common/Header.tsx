import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const changeLocale = router.locale === "en" ? "tw" : "en";

  // const [theme, setTheme] = useState("light");

  // const switchTheme = () => {
  //   if (localStorage.theme === "light") {
  //     localStorage.theme = "dark";
  //     document.documentElement.classList.add("dark");
  //     setTheme("dark");
  //   } else {
  //     localStorage.theme = "light";
  //     document.documentElement.classList.remove("dark");
  //     setTheme("light");
  //   }
  // };

  return (
    <header>
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo-light.svg"
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
          {/* <Image
            className="inline cursor-pointer"
            src="/images/icons/light.svg"
            alt="light"
            width={20}
            height={20}
            onClick={switchTheme}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
