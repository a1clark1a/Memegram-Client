import React, { Component } from "react";
import "./RegisterPage.css";

export default class RegisterPage extends Component {
  render() {
    return (
      <form className="register-form">
        <fieldset className="register-fieldset">
          <legend>Register</legend>
          <label htmlFor="full-name">
            Full Name *
            <input
              type="text"
              className="register-full-name-input"
              name="full-name"
              id="full-name"
              aria-label="Full Name"
              aria-required="true"
            />
          </label>
          <label htmlFor="user-name">
            User Name *
            <input
              type="text"
              className="register-user-name-input"
              name="user-name"
              id="user-name"
              aria-label="User Name"
              aria-required="true"
            />
          </label>
          <label htmlFor="password">
            Password *
            <input
              type="text"
              className="register-password-input"
              name="password"
              id="password"
              aria-label="Password"
              aria-required="true"
            />
          </label>
        </fieldset>
      </form>
    );
  }
}
