/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import useSWR from "swr";
import {
  Operation,
  OperationForm,
  OperationInput,
  OperationButton,
  OperationLabel,
} from "../bodycomponents/Operation";
import H2 from "../bodycomponents/H2";
import { useRouter } from "next/router";
import Content from "../../../Header/Content.json";
const OperationWithdrawal = (props) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const router = useRouter();
  const { withdrawal, amount } = Content[router.locale];
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const withdrawalSubmit = async (e) => {
    e.preventDefault();
    const mov = `amount=${+withdrawalAmount}`;
    const response = fetch(`/api/${id}/withdrawal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: mov,
    })
      .then((res) => {
        res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });

    setWithdrawalAmount("");
  };
  return (
    <Operation>
      <H2>{withdrawal}</H2>
      <OperationForm
        onSubmit={withdrawalSubmit}
        css={css`
          grid-template-columns: 2.5fr 1fr 2.5fr;
        `}
      >
        <OperationInput
          type="number"
          name="amount"
          value={withdrawalAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <OperationButton type="submit">→</OperationButton>
        <OperationLabel
          css={css`
            grid-row: 2;
          `}
        >
          {amount}
        </OperationLabel>
      </OperationForm>
    </Operation>
  );
};

export default OperationWithdrawal;
