/** @jsxImportSource @emotion/react */
import React, { Children, useState } from "react";
import { css } from "@emotion/react";

const Operation = (props) => {
  return (
    <div
      css={css`
        border-radius: 1rem;
        padding: 3rem 4rem;
        color: #333;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

const OperationForm = (props) => {
  return (
    <form
      action=""
      css={css`
        display: grid;
        grid-template-columns: 2.5fr 2.5fr 1fr;
        grid-template-rows: auto auto;
        gap: 0.4rem 1rem;
      `}
      {...props}
    >
      {props.children}
    </form>
  );
};
const OperationInput = (props) => {
  return (
    <input
      action=""
      css={css`
        width: 100%;
        border: none;
        background-color: rgba(255, 255, 255, 0.4);
        font-family: inherit;
        font-size: 1.5rem;
        text-align: center;
        color: #333;
        padding: 0.3rem 1rem;
        border-radius: 0.7rem;
        transition: all 0.3s;
        &:focus {
          outline: none;
          background-color: rgba(255, 255, 255, 0.6);
        }
      `}
      {...props}
    >
      {props.children}
    </input>
  );
};

const OperationButton = (props) => {
  return (
    <button
      css={css`
        border: none;
        border-radius: 0.7rem;
        font-size: 1.8rem;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.3s;
        &:focus {
          outline: none;
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};

const OperationLabel = (props) => {
  return (
    <label
      css={css`
        font-size: 1.3rem;
        text-align: center;
      `}
      {...props}
    >
      {props.children}
    </label>
  );
};

export {
  Operation,
  OperationForm,
  OperationInput,
  OperationButton,
  OperationLabel,
};
