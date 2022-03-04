/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";
import useSWR from "swr";
import H2 from "./components/bodycomponents/H2";
import {
  Pcurrentbalance,
  PDate,
  PBalance,
  BalanceMain,
} from "./components/bodycomponents/Balance";
import {
  MovementsMain,
  MovementsRow,
  MovementsType,
  MovementsValue,
  MovementsDate,
} from "./components/bodycomponents/Movements";
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
  OperationLabel,
} from "./components/bodycomponents/Operation";

const Bankapp = () => {
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });

  const movement = data.movements.map((amount) => +amount.amount);
  let sum = 0;

  movement.forEach(function (element) {
    sum += element;
  });

  const depositSubmit = (e) => {
    e.preventdefault();
  };
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
        <PBalance>{sum}€</PBalance>
      </BalanceMain>
      {/* movements */}
      <MovementsMain>
        {data.movements.map((movement) => (
          <MovementsRow key={movement.date}>
            <MovementsType>{movement.type}</MovementsType>
            <MovementsDate>{movement.date}</MovementsDate>
            <MovementsValue>{movement.amount}</MovementsValue>
          </MovementsRow>
        ))}
      </MovementsMain>
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
          <OperationLabel>Transfer to</OperationLabel>
          <OperationLabel>Amount</OperationLabel>
        </OperationForm>
      </Operation>
      <Operation
        css={css`
          background-image: linear-gradient(to top left, #39b385, #9be15d);
        `}
      >
        <H2>Request loan</H2>
        <OperationForm
          action=""
          css={css`
            grid-template-columns: 2.5fr 1fr 2.5fr;
          `}
        >
          <OperationInput type="number" />
          <OperationButton>→</OperationButton>
          <OperationLabel
            css={css`
              grid-row: 2;
            `}
          >
            Amount
          </OperationLabel>
        </OperationForm>
      </Operation>
      <Operation
        css={css`
          background-image: linear-gradient(to top left, #e52a5a, #ff585f);
        `}
      >
        <H2>Deposit</H2>
        <OperationForm
          action={`/api/${data._id}/deposit`}
          method="POST"
          css={css`
            grid-template-columns: 2.5fr 1fr 2.5fr;
          `}
        >
          <OperationInput type="number" name="amount" />
          <OperationButton>→</OperationButton>
          <OperationLabel
            css={css`
              grid-row: 2;
            `}
          >
            Amount
          </OperationLabel>
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
