/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Button from "./components/Button";
import SectionHeader from "./components/SectionHeader";
import Languages from "../Header/Languages";
import { useRouter } from "next/router";
import Content from "../Header/Content.json";
const JoinToday = () => {
  const router = useRouter();
  const { jointodayheader, joinus } = Content[router.locale];
  return (
    <div
      css={css`
        margin: 6em 0;
      `}
    >
      <SectionHeader>{jointodayheader}</SectionHeader>
      <div
        css={css`
          text-align: center;
        `}
      >
        <Button
          css={css`
            margin: 2em;
            font-size: 1.5em;
            border-radius: 50px;
          `}
        >
          {joinus}
        </Button>
      </div>
    </div>
  );
};

export default JoinToday;
