import axios from "axios";

export const loginUser = async (username, password) => {
  const { data } = await axios.post("/login", { username, password });
  console.log(data);
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
  console.log("lol");
};
