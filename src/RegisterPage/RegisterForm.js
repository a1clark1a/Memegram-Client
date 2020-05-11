import React, { Component } from "react";

import AuthApiService from "../service/auth-api-service";
import InfoToolTip from "../Utility/InfoToolTip/InfoToolTip";

import "./RegisterPage.css";

export default class RegisterPage extends Component {
  static defaultProps = {
    onRegisterSuccess: () => {},
  };

  state = { error: null };

  handleSubmitNewUser = (e) => {
    e.preventDefault();
    const { full_name, user_name, password } = e.target;
    this.setState({
      error: null,
    });
    AuthApiService.postRegisterUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then((res) => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegisterSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <form className="register-form form" onSubmit={this.handleSubmitNewUser}>
        <fieldset className="register-fieldset">
          <div role="alert">
            {error && <p className="error-message">{error}</p>}
          </div>
          <legend className="form-legend">
            {" < "}Register{" > "}
          </legend>
          <label htmlFor="full_name">
            Full Name <code className="req"> *</code>
          </label>
          <input
            required
            type="text"
            className="register-full-name-input"
            name="full_name"
            id="full_name"
            aria-label="Full Name"
            aria-required="true"
          />

          <label htmlFor="user_name">
            User Name <code className="req"> *</code>
          </label>
          <input
            required
            type="text"
            className="register-user-name-input"
            name="user_name"
            id="user_name"
            aria-label="User Name"
            aria-required="true"
          />

          <label htmlFor="password" className="label-alignment">
            Password <code className="req">*</code>
            <InfoToolTip
              text={
                "Password must contain 1 upper case, lower case, number and special character"
              }
            />
          </label>
          <input
            required
            type="password"
            className="register-password-input"
            name="password"
            id="password"
            aria-label="Password"
            aria-required="true"
          />

          <button className="nav-button button" type="submit">
            Register
          </button>
        </fieldset>
      </form>
    );
  }
}
