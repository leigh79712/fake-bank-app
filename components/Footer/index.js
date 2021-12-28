/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/icon.png";

const Links = [
  { name: "About", url: "/about" },
  { name: "Pricing", url: "/pricing" },
  { name: "Terms of Use", url: "/terms-of-use" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Careers", url: "/careers" },
  { name: "Blog", url: "/blog" },
  { name: "Contact Us", url: "/contact-us" },
];

const Footer = () => {
  return (
    <footer
      css={css`
        padding: 10rem 3rem;
        background-color: #37383d;
        text-align: center;
      `}
    >
      <ul
        css={css`
          display: flex;
          justify-content: center;
          list-style: none;
          grid-gap: 4rem;
          margin-bottom: 5rem;
        `}
      >
        {Links.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>
              <a
                css={css`
                  font-size: 1.6rem;
                  color: #eee;
                  text-decoration: none;
                  cursor: pointer;
                `}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Image src={logo} alt="logo" width={50} height={50} />
      <p
        css={css`
          font-size: 1.4rem;
          color: #aaa;
          text-align: center;
          margin-top: 5rem;
        `}
      >
        © Copyright by Jonas Schmedtmann. Use for learning or your portfolio.
      </p>
    </footer>
  );
};

export default Footer;
