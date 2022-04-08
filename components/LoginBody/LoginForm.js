/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { Button, Input, Label } from "components/Common";
import { useRouter } from "next/router";
import Content from "./Content.json";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { usernameText, passwordText, login } = Content[router.locale];
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
        <Label htmlFor="username">{usernameText}</Label>
        <Input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">{passwordText}</Label>
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
