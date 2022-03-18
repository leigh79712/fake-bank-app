/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const H2 = (props) => {
  return (
    <h2
      css={css`
        margin-bottom: 1.5rem;
        font-size: 1.7rem;
        font-weight: 600;
        color: #333;
      `}
      {...props}
    >
      {props.children}
    </h2>
  );
};

export default H2;
