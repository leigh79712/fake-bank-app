/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css, useTheme } from "@emotion/react";

const Input = (props) => {
  const theme = useTheme();
  return (
    <input
      css={css`
        border: none;
        border-bottom: 1px solid #919191;
        background: none;
        margin: 1em;
        padding: 1em 2em;
        width: 35%;
        color: ${theme.color};
      `}
      {...props}
    >
      {props.children}
    </input>
  );
};

export default Input;
