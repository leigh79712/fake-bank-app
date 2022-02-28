import React, { useState } from "react";

import axios, { Axios } from "axios";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   axios({
  //     method: "POST",
  //     data: {
  //       username: username,
  //       password: password,
  //     },
  //     url: "/login",
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };
  return (
    <form method="POST" action="/login">
      <div>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
