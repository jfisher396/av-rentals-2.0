import React from "react";

function LoginForm(props) {
  return (
    <form id="login-form" className="input-group" onSubmit={props.loginButton}>
      <input
        onChange={props.handleInputChange}
        value={props.loginData.email}
        type="email"
        name="email"
        className="form-control"
        placeholder="Email"
        aria-label="user's email"
      />
      <input
        onChange={props.handleInputChange}
        value={props.loginData.password}
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        aria-label="user's password"
      />
      <button type="submit"  className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default LoginForm