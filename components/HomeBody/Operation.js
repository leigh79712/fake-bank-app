/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionHeader } from "components/Common";
import Image from "next/image";
import icon1 from "../../public/images/icon1.png";
import icon2 from "../../public/images/icon2.png";
import icon3 from "../../public/images/icon3.png";
import { useRouter } from "next/router";
import Content from "./Content.json";

const Operation = () => {
  const router = useRouter();
  const { operations, operationHeader, operation1, operation2, operation3 } =
    Content[router.locale];
  return (
    <>
      <SectionTitle>{operations}</SectionTitle>
      <SectionHeader>{operationHeader}</SectionHeader>
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
          <Image src={icon1} width={350} height={200} alt=""></Image>
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
          <Image src={icon2} width={350} height={200} alt=""></Image>
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
          <Image src={icon3} width={350} height={200} alt=""></Image>
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
