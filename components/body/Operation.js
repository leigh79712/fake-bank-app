/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import SectionTitle from "./components/SectionTitle";
import SectionHeader from "./components/SectionHeader";
import Image from "next/image";
import icon1 from "../../public/images/icon1.png";
import icon2 from "../../public/images/icon2.png";
import icon3 from "../../public/images/icon3.png";
import Languages from "../Header/Languages";
import { useRouter } from "next/router";
import Content from "../Header/Content.json";

const Operation = () => {
  const router = useRouter();
  const { operations, operationheader, operation1, operation2, operation3 } =
    Content[router.locale];
  return (
    <>
      <SectionTitle>{operations}</SectionTitle>
      <SectionHeader>{operationheader}</SectionHeader>
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
              {operation1}
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
              {operation2}
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
              {operation3}
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
