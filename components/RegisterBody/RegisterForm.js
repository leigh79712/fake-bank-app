/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Button, Input, Label } from "components/Common";
import { useRouter } from "next/router";
import Content from "./Content.json";

const RegisterForm = () => {
  const [fisrtname, setFisrtname] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { usernameText, passwordText, firstName, lastName, mail, register } =
    Content[router.locale];
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("api/user", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       fisrtname,
  //       lastname,
  //       username,
  //       password,
  //       email,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  // };
  return (
    <form
      method="POST"
      action="/api/user"
      css={css`
        text-align: center;
        margin: 2em;
        padding: 2em;
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        {register}
      </h1>
      <div>
        <Label htmlFor="firstName">{firstName}</Label>
        <Input
          type="text"
          name="firstName"
          value={fisrtname}
          onChange={(e) => setFisrtname(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="lastname">{lastName}</Label>
        <Input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="username">{usernameText}</Label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">{passwordText}</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="email">{mail}</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button type="submit">{register}</Button>
    </form>
  );
};

export default RegisterForm;
