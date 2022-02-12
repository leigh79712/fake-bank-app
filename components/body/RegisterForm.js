import React from "react";
import { registerUser } from "../../lib/auth";
// import User from "../../models/user";

class RegisterForm extends React.Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    const { firstname, lastname, username, password, email } = this.state;
    e.preventDefault();
    registerUser(username, password, email, firstname, lastname);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="firstname"
            name="firstname"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegisterForm;
