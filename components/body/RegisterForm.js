import React, { useState } from "react";

const RegisterForm = () => {
  const [fisrtname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("api/user", {
      method: "POST",
      body: JSON.stringify({
        fisrtname,
        lastname,
        username,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          value={fisrtname}
          onChange={(e) => setFisrtname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
