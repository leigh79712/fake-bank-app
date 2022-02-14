import axios from "axios";

export const loginUser = async (username, password) => {
  const { data } = await axios.post("/login", { username, password });
};

export const registerUser = async (
  firstname,
  lastname,
  username,
  password,
  email
) => {
  const { data } = await axios.post("/register", {
    firstname,
    lastname,
    username,
    password,
    email,
  });
};
