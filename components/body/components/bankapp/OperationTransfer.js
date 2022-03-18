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
const OperationTransfer = () => {
  const [transferUsername, setTransferUsername] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const transferSubmit = (e) => {
    e.preventDefault();
    const mov = `amount=${+transferAmount}&username=${transferUsername}`;
    const response = fetch(`/api/${id}/transfer`, {
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
    setTransferAmount("");
    setTransferUsername("");
  };
  return (
    <Operation>
      <H2>Transfer money</H2>
      <OperationForm onSubmit={transferSubmit}>
        <OperationInput
          type="text"
          name="username"
          value={transferUsername}
          onChange={(e) => setTransferUsername(e.target.value)}
        />
        <OperationInput
          type="number"
          name="amount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
        />
        <OperationButton>→</OperationButton>
        <OperationLabel>Transfer to</OperationLabel>
        <OperationLabel>Amount</OperationLabel>
      </OperationForm>
    </Operation>
  );
};

export default OperationTransfer;
