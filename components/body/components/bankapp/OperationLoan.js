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
const OperationLoan = (props) => {
  const [loanAmount, setLoanAmount] = useState("");
  const router = useRouter();
  const { requestloan, amount } = Content[router.locale];

  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const id = data._id;

  const loanSubmit = (e) => {
    e.preventDefault();
    const mov = `amount=${+loanAmount}`;
    const response = fetch(`/api/${id}/loan`, {
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
    setLoanAmount("");
  };
  return (
    <Operation>
      <H2>{requestloan}</H2>
      <OperationForm
        onSubmit={loanSubmit}
        css={css`
          grid-template-columns: 2fr 2fr;
        `}
      >
        <OperationInput
          type="number"
          name="amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <OperationButton>→</OperationButton>
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

export default OperationLoan;
