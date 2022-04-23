/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Operation,
  OperationForm,
  OperationInput,
  OperationButton,
  OperationLabel,
} from "../bodycomponents/Operation";
import H2 from "../bodycomponents/H2";
import { useRouter } from "next/router";
import Content from "../../Content.json";
import valued from "./Operation.module.css";

const OperationTransfer = ({ data }) => {
  const router = useRouter();
  const { transfer, amount, transferTo } = Content[router.locale];
  const [transferUsername, setTransferUsername] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const id = data._id;

  const transferSubmit = (e) => {
    e.preventDefault();
    if (transferAmount.trim().length === 0 || transferAmount <= 0) {
      setIsValid(false);
      return;
    }

    if (transferUsername.trim().length === 0) {
      setUsernameValid(false);
      return;
    }
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
          className={!usernameValid ? valued.isValued : valued.valued}
          onChange={(e) => {
            if (e.target.value.trim().length > 0) {
              setUsernameValid(true);
            }
            setTransferUsername(e.target.value);
          }}
        />
        <OperationInput
          type="number"
          name="amount"
          value={transferAmount}
          min="0"
          className={!isValid ? valued.isValued : valued.valued}
          onChange={(e) => {
            if (e.target.value.trim().length > 0) {
              setIsValid(true);
            }
            setTransferAmount(e.target.value);
          }}
        />
        <OperationButton>→</OperationButton>
        <OperationLabel>{transferTo}</OperationLabel>
        <OperationLabel>{amount}</OperationLabel>
      </OperationForm>
    </Operation>
  );
};

export default OperationTransfer;
