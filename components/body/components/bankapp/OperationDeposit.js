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

const OperationDeposit = (props) => {
  const [depositAmount, setDepositAmount] = useState("");

  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const depositSubmit = async (e) => {
    e.preventDefault();
    const mov = `amount=${+depositAmount}`;
    const response = fetch(`/api/${id}/deposit`, {
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

    setDepositAmount("");
  };
  return (
    <Operation>
      <H2>Deposit</H2>
      <OperationForm
        onSubmit={depositSubmit}
        css={css`
          grid-template-columns: 2.5fr 1fr 2.5fr;
        `}
      >
        <OperationInput
          type="number"
          name="amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <OperationButton type="submit">→</OperationButton>
        <OperationLabel
          css={css`
            grid-row: 2;
          `}
        >
          Amount
        </OperationLabel>
      </OperationForm>
    </Operation>
  );
};

export default OperationDeposit;
