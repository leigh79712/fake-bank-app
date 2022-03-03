/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const MovementsMain = (props) => {
  return (
    <div
      css={css`
        grid-row: 2 / span 3;
        background-color: #fff;
        border-radius: 1rem;
        overflow: scroll;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

export { MovementsMain };
