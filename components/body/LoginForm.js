/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <h1>Login</h1>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
