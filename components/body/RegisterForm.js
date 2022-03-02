/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

const RegisterForm = () => {
  const [fisrtname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
        Register
      </h1>
      <div>
        <Label htmlFor="firstname">Firstname</Label>
        <Input
          type="text"
          name="firstname"
          value={fisrtname}
          onChange={(e) => setFisrtname(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="lastname">Lastname</Label>
        <Input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="email">E-mail:</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RegisterForm;
