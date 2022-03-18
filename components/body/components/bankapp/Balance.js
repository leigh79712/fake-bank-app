/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import useSWR from "swr";
import {
  Pcurrentbalance,
  PDate,
  PBalance,
  BalanceMain,
} from "../bodycomponents/Balance";
const Balance = (props) => {
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const movement = data.movements.map((amount) => +amount.amount);
  let sum = 0;
  movement.forEach(function (element) {
    sum += element;
  });
  let loan = 0;
  for (let e of data.movements) {
    if (e.type === "loan") {
      loan += +e.amount;
    }
  }
  console.log(data);

  const now = new Date();
  const option = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  const showDate = new Intl.DateTimeFormat("default", option).format(now);
  return (
    <BalanceMain>
      <div>
        <Pcurrentbalance>Hi, {data.username}</Pcurrentbalance>
        <PDate>
          As of <span>{showDate}</span>
        </PDate>
      </div>
      <div>
        <Pcurrentbalance>Savings</Pcurrentbalance>

        <PBalance>{sum}€</PBalance>
      </div>
      <div>
        <Pcurrentbalance>Loan</Pcurrentbalance>

        <PBalance>{loan}€</PBalance>
      </div>
    </BalanceMain>
  );
};

export default Balance;
