/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import Languages from "./Languages";
import { useRouter } from "next/router";
import Content from "./Content.json";

const Header = ({ themeState, toggleTheme, loggedIn, data }) => {
  const [opacity, setOpacity] = useState(1);
  const router = useRouter();
  const theme = useTheme();
  const { links, login, register, logout } = Content[router.locale];

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
        color: ${theme.color};
        a {
          color: ${theme.color};
        }
      `}
    >
      <Link href="/">
        <Image
          src={theme.logo}
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
      </Link>

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
            <Link href={link.url}>{link.name}</Link>
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
        {loggedIn && (
          <li>
            <Link href={`/${data._id}/bankapp`}>{data.lastname}</Link>
          </li>
        )}
        {loggedIn && (
          <li
            css={css`
              margin-left: 2rem;
            `}
          >
            <form method="GET" action="/logout">
              <button
                css={css`
                  font-size: 1rem;
                  font-weight: 400;
                  color: inherit;
                  text-decoration: none;
                  display: block;
                  transition: all 0.3s;
                  cursor: pointer;
                  border: none;
                  background: none;
                  opacity: ${opacity};
                `}
                onMouseEnter={mouseEnter}
                onMouseOut={mouseOut}
              >
                {logout}
              </button>
            </form>
          </li>
        )}
        {!loggedIn && (
          <li
            css={css`
              margin-left: 2rem;
            `}
          >
            <Link href="/login">{login}</Link>
          </li>
        )}
        {!loggedIn && (
          <li
            css={css`
              margin-left: 2rem;
            `}
          >
            <Link href="/register">{register}</Link>
          </li>
        )}
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
          <ThemeButton themeState={themeState} toggleTheme={toggleTheme} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
