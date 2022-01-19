/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Button from "./Button";
import SectionHeader from "./SectionHeader";
const JoinToday = () => {
  return (
    <div
      css={css`
        margin: 6em 0;
      `}
    >
      <SectionHeader>Do your banking where and when you like</SectionHeader>
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
          Join Us Today
        </Button>
      </div>
    </div>
  );
};

export default JoinToday;
