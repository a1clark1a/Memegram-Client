import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section className="registerPage-sect sect">
        <RegisterForm onRegisterSuccess={this.handleRegistrationSuccess} />
      </section>
    );
  }
}
