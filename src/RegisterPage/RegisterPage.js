import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section className="registerPage-sect">
        <RegisterForm onRegisterSuccess={this.handleRegistrationSuccess} />
      </section>
    );
  }
}
