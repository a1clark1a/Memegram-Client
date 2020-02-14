import React, { Component } from "react";
import "./LoginPage.css";

export default class LoginPage extends Component {
  render() {
    return (
      <form className="login-form">
        <fieldset className="login-fieldset">
          <legend>Log In</legend>
          <label htmlFor="user-name">
            User Name *
            <input
              type="text"
              className="login-user-name-input"
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
              className="login-password-input"
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
