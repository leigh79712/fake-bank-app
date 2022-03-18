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

const OperationTransfer = () => {
  const router = useRouter();
  const { transfer, amount, transferto } = Content[router.locale];
  const [transferUsername, setTransferUsername] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  const id = data._id;

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
      <H2>{transfer}</H2>
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
        <OperationLabel>{transferto}</OperationLabel>
        <OperationLabel>{amount}</OperationLabel>
      </OperationForm>
    </Operation>
  );
};

export default OperationTransfer;
