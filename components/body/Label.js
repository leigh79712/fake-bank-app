/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const Label = (props) => {
  return (
    <label
      css={css`
        border: none;
        font-size: 1.5em;
        padding: 1em;
      `}
      {...props}
    >
      {props.children}
    </label>
  );
};

export default Label;
