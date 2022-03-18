/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import useSWR from "swr";
import type from "./Bankapp.module.css";

import Balance from "./components/bankapp/Balance";
import {
  MovementsMain,
  MovementsRow,
  MovementsType,
  MovementsValue,
  MovementsDate,
} from "./components/bodycomponents/Movements";
import Summary from "./components/bankapp/Summary";

import OperationTransfer from "./components/bankapp/OperationTransfer";
import OperationLoan from "./components/bankapp/OperationLoan";
import OperationDeposit from "./components/bankapp/OperationDeposit";

const Bankapp = () => {
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });

  const move = [];

  const id = data._id;

  for (let i = data.movements.length - 1; i > 0; i--) {
    move.push(
      <MovementsRow key={i}>
        <MovementsType
          className={
            data.movements[i].amount > 0 ? type.deposit : type.withdrawal
          }
        >
          {data.movements[i].type}
        </MovementsType>
        <MovementsDate>{data.movements[i].date}</MovementsDate>
        <MovementsValue>{data.movements[i].amount}</MovementsValue>
      </MovementsRow>
    );
  }

  return (
    <div
      css={css`
        position: relative;
        max-width: 100rem;
        margin: 4rem auto;
        display: grid;
        grid-template-columns: 4fr 2fr 2fr;
        grid-template-rows: auto repeat(3, 15rem) auto;
        gap: 2rem;
      `}
    >
      {/* blance */}
      <Balance />
      {/* movements */}
      <MovementsMain>{move}</MovementsMain>
      {/* summary */}
      <Summary />
      {/* operation */}
      <OperationTransfer />
      <OperationLoan />
      <OperationDeposit />
      <OperationDeposit />
      <p
        css={css`
          padding: 0 0.3rem;
          margin-top: 1.9rem;
          text-align: right;
          font-size: 1.25rem;
        `}
      >
        " You will be logged out in "
        <span
          css={css`
            font-weight: 600;
          `}
        >
          00:00
        </span>
      </p>
    </div>
  );
};

export default Bankapp;
