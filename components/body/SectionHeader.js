/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

const SectionHeader = (props) => {
  return (
    <>
      <h4
        css={css`
          font-size: 4rem;
          line-height: 1.3;
          font-weight: 500;

          width: 800px;
          margin: 0 auto;
        `}
      >
        {props.children}
      </h4>
    </>
  );
};

export default SectionHeader;
