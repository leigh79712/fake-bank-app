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
import valued from "./Operation.module.css";

import { useRouter } from "next/router";
import Content from "../../Content.json";
const OperationLoan = (props) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [isValid, setIsValid] = useState(true);

  const router = useRouter();
  const { requestLoan, amount } = Content[router.locale];

  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const id = data._id;

  const loanSubmit = (e) => {
    e.preventDefault();
    if (loanAmount.trim().length === 0 || loanAmount <= 0) {
      setIsValid(false);
      return;
    }
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
      <H2>{requestLoan}</H2>
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
          min="0"
          className={!isValid ? valued.isValued : valued.valued}
          onChange={(e) => {
            if (e.target.value.trim().length > 0) {
              setIsValid(true);
            }
            setLoanAmount(e.target.value);
          }}
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
