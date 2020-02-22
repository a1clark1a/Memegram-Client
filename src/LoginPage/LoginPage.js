import React, { Component } from "react";
import UserService from "../service/user-service";
import UserContext from "../context/UserContextProvider";
import LoginForm from "./LoginForm";

export default class LoginPage extends Component {
  static contextType = UserContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = user_name => {
    UserService.getUserByUserName(user_name)
      .then(this.context.setUser)
      .catch(this.context.setError);
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <section className="loginPage-sect">
        <LoginForm onLoginSucces={this.handleLoginSuccess} />
      </section>
    );
  }
}
