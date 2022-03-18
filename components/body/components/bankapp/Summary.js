/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import useSWR from "swr";
import {
  SummaryMain,
  SummaryP,
  SummaryAmount,
  SummaryButton,
} from "../bodycomponents/Summary";

const Summary = (props) => {
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const movement = data.movements.map((amount) => +amount.amount);
  const income = movement
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outcome = movement
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  return (
    <SummaryMain>
      <SummaryP>In</SummaryP>

      <SummaryAmount
        css={css`
          color: #66c873;
        `}
      >
        {income}€
      </SummaryAmount>

      <SummaryP>Out</SummaryP>
      <SummaryAmount
        css={css`
          color: #f5465d;
        `}
      >
        {outcome}€
      </SummaryAmount>
    </SummaryMain>
  );
};

export default Summary;
