import React, { Component } from "react";
import Container from "../../components/Container/Container";
import SignupForm from "../../components/SignupForm/SignupForm";

class Register extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Registration</h1>
          <SignupForm />
        </Container>
      </div>
    );
  }
}

export default Register;
