/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const Input = (props) => {
  return (
    <input
      css={css`
        border: none;
        border-bottom: 1px solid #919191;
        margin: 1em;
        padding: 1em 2em;
        width: 35%;
      `}
      {...props}
    >
      {props.children}
    </input>
  );
};

export default Input;
