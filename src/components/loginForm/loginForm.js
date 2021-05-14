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
      <div className="mb-3 form-check ">
        <input type="checkbox" className="form-check-input" id="needToRegister" name="needToRegister" />
        <label className="form-check-label" for="needToRegister">Need to register</label>
      </div>
    </form>
  );
}

export default LoginForm