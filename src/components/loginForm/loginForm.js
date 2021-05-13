import React from "react";

function LoginForm(props) {
  return (
    <form className="input-group w-25" onSubmit={props.saveUser}>
      <input
        onChange={props.handleInputChange}
        value={props.userData.email}
        type="email"
        name="email"
        className="form-control"
        placeholder="Email"
        aria-label="user's email"
      />
      <input
        onChange={props.handleInputChange}
        value={props.userData.password}
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