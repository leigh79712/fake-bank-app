/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const SummaryMain = (props) => {
  return (
    <div
      css={css`
        grid-row: 5 / 6;
        display: flex;
        align-items: baseline;
        padding: 0 0.3rem;
        margin-top: 1rem;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};
const SummaryP = (props) => {
  return (
    <div
      css={css`
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
        margin-right: 0.8rem;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

const SummaryAmount = (props) => {
  return (
    <div
      css={css`
        font-size: 2.2rem;
        margin-right: 2.5rem;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};
const SummaryButton = (props) => {
  return (
    <div
      css={css`
        margin-left: auto;
        border: none;
        background: none;
        font-size: 1.3rem;
        font-weight: 500;
        cursor: pointer;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};
export { SummaryMain, SummaryP, SummaryAmount, SummaryButton };
