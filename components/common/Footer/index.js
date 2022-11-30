/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Content from "./Content.json";

const Footer = () => {
  const router = useRouter();
  const { footerLinks } = Content[router.locale];
  const theme = useTheme();
  return (
    <footer
      css={css`
        padding: 10rem 3rem;
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
        {footerLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Image src={theme.icon} alt="logo" width={130} height={130} />
      <p
        css={css`
          font-size: 1.4rem;
          text-align: center;
          margin-top: 5rem;
        `}
      >
        © Copyright by Jie Lin Yang and Jerry Tsai.
      </p>
    </footer>
  );
};

export default Footer;
