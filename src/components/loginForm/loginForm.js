import React from "react";

export default function loginForm() {
  return (
    <form className="input-group w-25">
      <input
        type="email"
        name="email"
        class="form-control"
        placeholder="Email"
        aria-label="user's email"
      />
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="Password"
        aria-label="user's password"
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
