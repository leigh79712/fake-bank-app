/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./components/SectionTitle";
import SectionHeader from "./components/SectionHeader";
import bank from "../../public/images/bank.jpeg";
import saving from "../../public/images/saving.jpeg";
import piggybank from "../../public/images/piggybank.jpeg";
import Languages from "../Header/Languages";
import { useRouter } from "next/router";
import Content from "../Header/Content.json";

const Feature = () => {
  const router = useRouter();
  const { feature, featureheader, feature1, feature2, feature3 } =
    Content[router.locale];
  return (
    <div
      css={css`
        padding: 5em 13em;
      `}
    >
      <SectionTitle>{feature}</SectionTitle>
      <SectionHeader>{featureheader}</SectionHeader>
      <div
        css={css`
          margin: 4em auto;
          display: grid;
          grid-template-columns: 4fr 4fr;
          grid-gap: 3em;
          justify-items: center;
          align-items: center;
        `}
      >
        <div>
          <Image src={bank} height={550} width={880}></Image>
        </div>
        <div
          css={css`
            padding: 5em;
          `}
        >
          <h5
            css={css`
              font-size: 2rem;
              margin-bottom: 1rem;
            `}
          >
            {feature1}
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aperiam vero sed corporis voluptatem voluptatum nulla?
          </p>
        </div>

        <div
          css={css`
            padding: 5em;
          `}
        >
          <h5
            css={css`
              font-size: 2rem;
              margin-bottom: 1rem;
            `}
          >
            {feature2}
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aperiam vero sed corporis voluptatem voluptatum nulla?
          </p>
        </div>
        <div>
          <Image src={saving} height={550} width={880}></Image>
        </div>
        <div>
          <Image src={piggybank} height={550} width={880}></Image>
        </div>
        <div
          css={css`
            padding: 5em;
          `}
        >
          <h5
            css={css`
              font-size: 2rem;
              margin-bottom: 1rem;
            `}
          >
            {feature3}
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aperiam vero sed corporis voluptatem voluptatum nulla?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
