/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import Languages from "../Header/Languages";
import { useRouter } from "next/router";
import Content from "../Header/Content.json";

const RegisterForm = () => {
  const [fisrtname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { uname, pword, fname, lname, mail, register } = Content[router.locale];
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
        <Label htmlFor="firstname">{fname}</Label>
        <Input
          type="text"
          name="firstname"
          value={fisrtname}
          onChange={(e) => setFisrtname(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="lastname">{lname}</Label>
        <Input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="username">{uname}</Label>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">{pword}</Label>
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
