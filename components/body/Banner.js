/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { css, useTheme } from "@emotion/react";
import Button from "./components/Button";
import { useRouter } from "next/router";
import Content from "../Header/Content.json";

const Banner = ({ loggedIn, data }) => {
  const router = useRouter();
  const { bannerh1, bannerh4, register, myapp } = Content[router.locale];
  const theme = useTheme();
  console.log(loggedIn);
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
            dangerouslySetInnerHTML={{ __html: bannerh1 }}
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
            {bannerh4}
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
            <Link href={`/${data._id}/bankapp`}>
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
                {myapp}
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
