/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import SectionHeader from "./SectionHeader";
import bank from "../../public/images/bank.jpeg";
import saving from "../../public/images/saving.jpeg";
import piggybank from "../../public/images/piggybank.jpeg";

const Feature = () => {
  return (
    <div
      css={css`
        padding: 5em 13em;
      `}
    >
      <SectionTitle>FEATURE</SectionTitle>
      <SectionHeader>
        Everything you need in a modern bank and More
      </SectionHeader>
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
            100% digital bank
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
            Watch your money grow
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
            Free debit card included
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
