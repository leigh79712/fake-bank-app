import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <header>
      <div className="container mx-auto columns-3 py-5">
        <Link href="/">
          <Image
            src={`/images/logo-${theme}.svg`}
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
        <div className="text-right">
          <Link href="/register">Sign in</Link>
          <Image
            className="inline cursor-pointer"
            src={`/images/icons/${theme}.svg`}
            alt={theme}
            width={20}
            height={20}
            onClick={switchTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
