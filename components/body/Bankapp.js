/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";
import H2 from "./components/bodycomponents/H2";
import {
  Pcurrentbalance,
  PDate,
  PBalance,
  BalanceMain,
} from "./components/bodycomponents/Balance";
import { MovementsMain } from "./components/bodycomponents/Movements";
import {
  SummaryMain,
  SummaryP,
  SummaryAmount,
  SummaryButton,
} from "./components/bodycomponents/Summary";
import {
  Operation,
  OperationForm,
  OperationInput,
  OperationButton,
} from "./components/bodycomponents/Operation";

const Bankapp = () => {
  return (
    <div
      css={css`
        position: relative;
        max-width: 100rem;
        margin: 4rem auto;
        display: grid;
        grid-template-columns: 4fr 3fr;
        grid-template-rows: auto repeat(3, 15rem) auto;
        gap: 2rem;
      `}
    >
      {/* blance */}
      <BalanceMain>
        <div>
          <Pcurrentbalance>Current balance</Pcurrentbalance>
          <PDate>
            " As of " <span></span>
          </PDate>
        </div>
        <PBalance>€</PBalance>
      </BalanceMain>
      {/* movements */}
      <MovementsMain></MovementsMain>
      {/* summary */}
      <SummaryMain>
        <SummaryP>In</SummaryP>

        <SummaryAmount
          css={css`
            color: #66c873;
          `}
        >
          2€
        </SummaryAmount>

        <SummaryP>Out</SummaryP>
        <SummaryAmount
          css={css`
            color: #f5465d;
          `}
        >
          2€
        </SummaryAmount>
        <SummaryP>Interest</SummaryP>
        <SummaryAmount
          css={css`
            color: #66c873;
          `}
        >
          2€
        </SummaryAmount>
        <SummaryButton> ↓ SORT</SummaryButton>
      </SummaryMain>
      {/* operation */}
      <Operation
        css={css`
          background-image: linear-gradient(to top left, #ffb003, #ffcb03);
        `}
      >
        <H2>Transfer money</H2>
        <OperationForm action="">
          <OperationInput type="text" name="" id="" />
          <OperationInput type="number" />
          <OperationButton>→</OperationButton>
        </OperationForm>
      </Operation>
      <Operation
        css={css`
          background-image: linear-gradient(to top left, #39b385, #9be15d);
        `}
      >
        <H2>Request loan</H2>
        <OperationForm action="">
          <OperationInput type="number" />
          <OperationButton>→</OperationButton>
        </OperationForm>
      </Operation>
      <Operation
        css={css`
          background-image: linear-gradient(to top left, #e52a5a, #ff585f);
        `}
      >
        <H2>Withdraw</H2>
        <OperationForm action="">
          <OperationInput type="number" />
          <OperationButton>→</OperationButton>
        </OperationForm>
      </Operation>
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
