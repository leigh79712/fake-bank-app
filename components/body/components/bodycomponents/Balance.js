/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const Pcurrentbalance = (props) => {
  return (
    <p
      css={css`
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: -0.2rem;
      `}
      {...props}
    >
      {props.children}
    </p>
  );
};

const PDate = (props) => {
  return (
    <p
      css={css`
        font-size: 1.4rem;
        color: #888;
      `}
      {...props}
    >
      {props.children}
    </p>
  );
};

const PBalance = (props) => {
  return (
    <p
      css={css`
        font-size: 4.5rem;
        font-weight: 400;
      `}
      {...props}
    >
      {props.children}
    </p>
  );
};

const BalanceMain = (props) => {
  return (
    <div
      css={css`
        grid-column: 1 / span 2;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 2rem;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};
export { Pcurrentbalance, PDate, PBalance, BalanceMain };
