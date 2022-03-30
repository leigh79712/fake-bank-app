/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useCallback } from "react";

import { useRouter } from "next/router";
import { css } from "@emotion/react";
import useSWR from "swr";
import type from "./Bankapp.module.css";
import H2 from "./components/bodycomponents/H2";
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
import OperationWithdrawal from "./components/bankapp/OperationWithdrawal";
import Countdown from "react-countdown";
import LoginForm from "./LoginForm";
const Bankapp = () => {
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const move = [];
  const router = useRouter();

  // Random component
  const completionist = useCallback((e) => {
    fetch("/logout").then((res) => {
      // Do a fast client-side transition to the already prefetched dashboard page
      if (res.ok) {
        router.push("/login");
      }
    });
  }, []);
  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/login");
  }, []);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      completionist();
    }
    // Render a countdown
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

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
      <OperationWithdrawal />
      <div
        css={css`
          grid-column: 2 / span 2;
          /* background-color: #f4f4f479; */
          border-radius: 1rem;
          padding: 2rem 3rem;
          color: #333;
        `}
      >
        <H2>Message</H2>
        <div
          css={css`
            padding: 1rem 1rem;
            overflow: scroll;
          `}
        >
          New message
        </div>
      </div>
      <div></div>
      <p
        css={css`
          padding: 0 0.3rem;
          margin-top: 1.9rem;
          text-align: right;
          font-size: 1.25rem;
          grid-row: span 2;
        `}
      >
        " You will be logged out in "
        <Countdown
          date={Date.now() + 30000}
          renderer={renderer}
          css={css`
            font-weight: 600;
          `}
        />
      </p>
    </div>
  );
};

export default Bankapp;
