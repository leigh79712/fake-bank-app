/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import ThemeButton from "./ThemeButton";
import Languages from "./Languages";
import { useRouter } from "next/router";
import Content from "./Content.json";

const Header = ({ dark, switchTheme }) => {
  const [opacity, setOpacity] = useState(1);
  const router = useRouter();
  const theme = useTheme();
  const { links, login, register } = Content[router.locale];

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
        background-color: ${theme.background};
        color: ${theme.color};
        a {
          color: ${theme.color};
        }
      `}
    >
      <a>
        <Image
          src={logo}
          alt="logo"
          height={60}
          width={130}
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
        {links.map((link) => (
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
              {login}
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
                color: #fff;
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
              {register}
            </a>
          </Link>
        </li>
        <li
          css={css`
            margin-left: 2rem;
          `}
        >
          <Languages />
        </li>
        <li
          css={css`
            margin-left: 2rem;
          `}
        >
          <ThemeButton dark={dark} switchTheme={switchTheme} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
