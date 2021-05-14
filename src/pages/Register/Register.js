import React, { Component } from "react";
import Container from "../../components/Container/Container";
import SignupForm from "../../components/SignupForm/SignupForm";
import API from "../../utils/API";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitButton = (event) => {
    event.preventDefault();
    API.newUser(this.state)
      .then(() => {
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        alert("Login failed");
      });
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Registration</h1>
          <SignupForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmitButton}
            newUserEmail={this.state.email}
            newUserPassword={this.state.password}
          />
        </Container>
      </div>
    );
  }
}

export default Register;
