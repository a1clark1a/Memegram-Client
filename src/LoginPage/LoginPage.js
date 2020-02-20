import React, { Component } from "react";
import LoginForm from "./LoginForm";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    console.log("called");
    return (
      <section className="loginPage-sect">
        <LoginForm onLoginSucces={this.handleLoginSuccess} />
      </section>
    );
  }
}
