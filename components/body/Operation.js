/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import SectionTitle from "./SectionTitle";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import icon1 from "../../public/images/icon1.png";
import icon2 from "../../public/images/icon2.png";
import icon3 from "../../public/images/icon3.png";

const Operation = () => {
  return (
    <>
      <SectionTitle>OPERATIONS</SectionTitle>
      <SectionHeader>
        Everything as simple as possible, but no simpler.
      </SectionHeader>
      <div
        css={css`
          padding: 4em 12em;
          margin: 4em auto;
          display: grid;
          grid-template-columns: 4fr 4fr 4fr;
          grid-gap: 3em;
          justify-items: center;
          align-items: center;
        `}
      >
        <div>
          <Image src={icon1} width={350} height={200}></Image>
          <div>
            <h5
              css={css`
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            >
              Open a new everyday account
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              aperiam vero sed corporis voluptatem voluptatum nulla?
            </p>
          </div>
        </div>
        <div>
          <Image src={icon2} width={350} height={200}></Image>
          <div>
            <h5
              css={css`
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            >
              Frequent Flyer Points
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              aperiam vero sed corporis voluptatem voluptatum nulla?
            </p>
          </div>
        </div>
        <div>
          <Image src={icon3} width={350} height={200}></Image>
          <div>
            <h5
              css={css`
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            >
              Quick Start Home Loan Application
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              aperiam vero sed corporis voluptatem voluptatum nulla?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Operation;
