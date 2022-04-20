/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { css, useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Content from "./Content.json";
import Link from "next/link";

const Banner = ({ loggedIn, data }) => {
  const router = useRouter();
  const { bannerH1, bannerH4, register, myApp } = Content[router.locale];
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 0 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          max-width: 115rem;
          display: grid;
          grid-template-columns: 3fr 2fr;
          row-gap: 3rem;
          align-content: center;
          justify-content: center;
          align-items: start;
          justify-items: start;
        `}
      >
        <div>
          <h1
            dangerouslySetInnerHTML={{ __html: bannerH1 }}
            css={css`
              font-size: 5.5rem;
              line-height: 1.35;
            `}
          />

          <h4
            css={css`
              font-size: 2.4rem;
              font-weight: 500;
            `}
          >
            {bannerH4}
          </h4>
          {!loggedIn && (
            <Link href="/register">
              <a
                css={css`
                  background-color: #2ec4b6;
                  color: #fff;
                  border-radius: 20px;
                  border: none;
                  padding: 1em 2em;
                  cursor: pointer;
                `}
              >
                {register}
              </a>
            </Link>
          )}
          {loggedIn && (
            <Link href={`/${data._id}/bank_app`}>
              <a
                css={css`
                  background-color: #2ec4b6;
                  color: #fff;
                  border-radius: 20px;
                  border: none;
                  padding: 1em 2em;
                  cursor: pointer;
                `}
              >
                {myApp}
              </a>
            </Link>
          )}
        </div>
        <div>
          <Image width={500} height={350} src={theme.card} alt="card"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
