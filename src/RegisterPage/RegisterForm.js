import React, { Component } from "react";
import AuthApiService from "../service/auth-api-service";
import "./RegisterPage.css";

export default class RegisterPage extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmitNewUser = e => {
    e.preventDefault();
    const { full_name, user_name, password } = e.target;
    this.setState({
      error: null
    });
    AuthApiService.postRegisterUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value
    })
      .then(user => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error.message });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <form className="register-form" onSubmit={this.handleSubmitNewUser}>
        <div role="alert">
          {error && <p className="error-message">{error}</p>}
        </div>
        <fieldset className="register-fieldset">
          <legend>Register</legend>
          <label htmlFor="full_name">
            Full Name *
            <input
              type="text"
              className="register-full-name-input"
              name="full_name"
              id="full_name"
              aria-label="Full Name"
              aria-required="true"
            />
          </label>
          <label htmlFor="user_name">
            User Name *
            <input
              type="text"
              className="register-user-name-input"
              name="user_name"
              id="user_name"
              aria-label="User Name"
              aria-required="true"
            />
          </label>
          <label htmlFor="password">
            Password *
            <input
              type="password"
              className="register-password-input"
              name="password"
              id="password"
              aria-label="Password"
              aria-required="true"
            />
          </label>
          <button type="submit">Register</button>
        </fieldset>
      </form>
    );
  }
}
