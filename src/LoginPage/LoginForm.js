import React, { Component } from "react";
import AuthApiService from "../service/auth-api-service";
import TokenService from "../service/token-service";
import "./LoginPage.css";

export default class LoginPage extends Component {
  static defaulProps = {
    onLoginSuccess: () => {}
  };
  state = { error: null };

  handleLoginSubmit = e => {
    e.preventDefault();
    this.setState({
      error: null
    });
    const { user_name, password } = e.target;
    AuthApiService.postLoginUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthTokenAndUserName(res.authToken, res.user_name);
        this.props.onLoginSucces(res.user_name);
      })
      .catch(res => {
        this.setState({ error: res.error.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="login-form form" onSubmit={this.handleLoginSubmit}>
        <fieldset className="login-fieldset">
          <div role="alert">
            {error && <p className="error-message">{error}</p>}
          </div>
          <legend className="form-legend">
            {" < "}Log In {" > "}
          </legend>
          <label htmlFor="user_name">
            User Name
            <code className="req"> *</code>
          </label>
          <input
            required
            type="text"
            className="login-user-name-input"
            name="user_name"
            id="user_name"
            aria-label="User Name"
            aria-required="true"
          />

          <label htmlFor="password">
            Password
            <code className="req"> *</code>
          </label>
          <input
            required
            type="password"
            className="login-password-input"
            name="password"
            id="password"
            aria-label="Password"
            aria-required="true"
          />

          <button className="nav-button button" type="submit">
            <span>Login</span>
          </button>
        </fieldset>
      </form>
    );
  }
}
