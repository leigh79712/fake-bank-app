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

const MovementsRow = (props) => {
  return (
    <div
      css={css`
        padding: 2.25rem 4rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

const MovementsDate = (props) => {
  return (
    <div
      css={css`
        font-size: 1.1rem;
        text-transform: uppercase;
        font-weight: 500;
        color: #666;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};
const MovementsType = (props) => {
  return (
    <div
      css={css`
        font-size: 1.1rem;
        text-transform: uppercase;
        font-weight: 500;
        color: #fff;
        padding: 0.1rem 1rem;
        border-radius: 10rem;
        margin-right: 2rem;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};
const MovementsValue = (props) => {
  return (
    <div
      css={css`
        font-size: 1.7rem;
        margin-left: auto;
        color: #23272f;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

export {
  MovementsMain,
  MovementsRow,
  MovementsType,
  MovementsDate,
  MovementsValue,
};
