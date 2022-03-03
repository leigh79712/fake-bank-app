/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const Button = (props) => {
  return (
    <button
      css={css`
        background-color: #2ec4b6;
        color: #fff;
        border-radius: 20px;
        border: none;
        padding: 1em 2em;
        cursor: pointer;
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
