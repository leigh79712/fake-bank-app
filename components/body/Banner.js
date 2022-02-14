/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";
import Button from "./Button";
import card from "../../public/images/card.jpeg";
import Languages from "../Header/Languages";
import { useRouter } from "next/router";
import Content from "../Header/Content.json";

const Banner = () => {
  const router = useRouter();
  const { bannerh1, bannerh4, register } = Content[router.locale];

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
            css={css`
              font-size: 5.5rem;
              line-height: 1.35;
            `}
          >
            {bannerh1}
          </h1>
          <h4
            css={css`
              font-size: 2.4rem;
              font-weight: 500;
            `}
          >
            {bannerh4}
          </h4>
          <Button>{register}</Button>
        </div>
        <div>
          <Image src={card} alt="card"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
