/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const Links = [
  { name: "Features", url: "/features" },
  { name: "Operations", url: "/operations" },
  { name: "Testimonials", url: "/testimonials" },
];

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 9rem;
        padding: 0 6rem;
        z-index: 100;
      `}
    >
      <a>
        <Image src={logo} alt="logo" height={50} width={160} />
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
                `}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
        <li
          css={css`
            margin-left: 4rem;
          `}
        >
          <Link href="/open-account">
            <a
              css={css`
                font-size: 1.7rem;
                font-weight: 400;
                color: #222;
                background-color: #5ec576;
                padding: 0.8rem 2.5rem;
                border-radius: 3rem;
              `}
            >
              Open account
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
