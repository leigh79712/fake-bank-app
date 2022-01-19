/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

const SectionTitle = (props) => {
  return (
    <>
      <div
        css={css`
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #2ec4b6;
          margin: 2rem;
          text-align: center;
        `}
      >
        {props.children}
      </div>
    </>
  );
};

export default SectionTitle;
