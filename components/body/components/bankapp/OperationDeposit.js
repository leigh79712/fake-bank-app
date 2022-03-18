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

const OperationDeposit = (props) => {
  const [depositAmount, setDepositAmount] = useState("");
  const router = useRouter();
  const { deposit, amount } = Content[router.locale];
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const id = data._id;

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
      <H2>{deposit}</H2>
      <OperationForm
        onSubmit={depositSubmit}
        css={css`
          grid-template-columns: 2fr 2fr;
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
          {amount}
        </OperationLabel>
      </OperationForm>
    </Operation>
  );
};

export default OperationDeposit;
