/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css, useTheme } from "@emotion/react";

const H2 = (props) => {
  const theme = useTheme();
  return (
    <h2
      css={css`
        margin-bottom: 1.5rem;
        font-size: 1.7rem;
        font-weight: 600;
        color: ${theme.color};
      `}
      {...props}
    >
      {props.children}
    </h2>
  );
};

export default H2;
