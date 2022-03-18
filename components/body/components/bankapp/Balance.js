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
import { useRouter } from "next/router";
import Content from "../../../Header/Content.json";

const Balance = (props) => {
  const router = useRouter();
  const { loanP, save, hi } = Content[router.locale];

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
        <Pcurrentbalance>
          {hi} {data.username}
        </Pcurrentbalance>
        <PDate>
          As of <span>{showDate}</span>
        </PDate>
      </div>
      <div>
        <Pcurrentbalance>{save}</Pcurrentbalance>

        <PBalance>{sum}€</PBalance>
      </div>
      <div>
        <Pcurrentbalance>{loanP}</Pcurrentbalance>

        <PBalance>{loan}€</PBalance>
      </div>
    </BalanceMain>
  );
};

export default Balance;
