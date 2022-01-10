/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import ThemeButton from "./ThemeButton";

const Links = [
  { name: "Features", url: "/features" },
  { name: "Operations", url: "/operations" },
  { name: "Testimonials", url: "/testimonials" },
];

const Header = () => {
  const [opacity, setOpacity] = useState(1);

  const mouseEnter = (e) => {
    e.target.style.opacity = 1;
    setOpacity(0.5);
  };

  const mouseOut = (e) => {
    e.target.style.opacity = null;
    setOpacity(1);
  };

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 9rem;
        padding: 0 6rem;
        z-index: 100;
      `}
    >
      <a>
        <Image
          src={logo}
          alt="logo"
          height={50}
          width={160}
          css={css`
            transition: all 0.3s;
            opacity: ${opacity};
          `}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseOut}
        />
      </a>
      <ul
        css={css`
          display: flex;
          align-items: center;
          list-style: none;
        `}
      >
        {Links.map((link) => (
          <li
            key={link.name}
            css={css`
              margin-left: 4rem;
            `}
          >
            <Link href={link.name}>
              <a
                css={css`
                  font-size: 1.7rem;
                  font-weight: 400;
                  color: inherit;
                  text-decoration: none;
                  display: block;
                  cursor: pointer;
                  transition: all 0.3s;
                  opacity: ${opacity};
                `}
                onMouseEnter={mouseEnter}
                onMouseOut={mouseOut}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <ul
        css={css`
          display: flex;
          align-items: center;
          list-style: none;
        `}
      >
        <li
          css={css`
            margin-left: 2rem;
          `}
        >
          <Link href="/login">
            <a
              css={css`
                font-size: 1rem;
                font-weight: 400;
                color: inherit;
                text-decoration: none;
                display: block;
                transition: all 0.3s;
                cursor: pointer;
                opacity: ${opacity};
              `}
              onMouseEnter={mouseEnter}
              onMouseOut={mouseOut}
            >
              Login
            </a>
          </Link>
        </li>
        <li
          css={css`
            margin-left: 2rem;
          `}
        >
          <Link href="/register">
            <a
              css={css`
                font-size: 1rem;
                font-weight: 400;
                color: inherit;
                text-decoration: none;
                display: block;
                transition: all 0.3s;
                cursor: pointer;
                opacity: ${opacity};
                background-color: #2ec4b6;
                padding: 0.5em;
                border-radius: 5px;
              `}
              onMouseEnter={mouseEnter}
              onMouseOut={mouseOut}
            >
              Register
            </a>
          </Link>
        </li>
        <li
          css={css`
            margin-left: 2rem;
          `}
        >
          <Link href="">
            <a
              css={css`
                font-size: 1rem;
                font-weight: 400;
                color: inherit;
                text-decoration: none;
                display: block;
                transition: all 0.3s;
                cursor: pointer;
                opacity: ${opacity};
              `}
              onMouseEnter={mouseEnter}
              onMouseOut={mouseOut}
            >
              language
            </a>
          </Link>
        </li>
        <li
          css={css`
            margin-left: 2rem;
          `}
        >
          <ThemeButton />
        </li>
      </ul>
    </header>
  );
};

export default Header;
