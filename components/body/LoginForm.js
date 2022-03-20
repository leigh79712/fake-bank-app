/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import Languages from "../Header/Languages";
import { useRouter } from "next/router";
import Content from "../Header/Content.json";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { uname, pword, login } = Content[router.locale];
  return (
    <form
      method="POST"
      action="/login"
      css={css`
        text-align: center;
        margin: 2em;
        padding: 2em;
      `}
    >
      <h1>{login}</h1>
      <div>
        <Label htmlFor="username">{uname}</Label>
        <Input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">{pword}</Label>
        <Input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit">{login}</Button>
    </form>
  );
};

export default LoginForm;
