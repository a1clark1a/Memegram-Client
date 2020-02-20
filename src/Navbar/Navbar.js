import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../service/token-service";
import "./Navbar.css";

export default class Navbar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderProfileLink() {
    return (
      <div className="profile-wrapper">
        <Link to="/user/:userid">
          <button>Profile</button>
        </Link>
        <Link onClick={this.handleLogoutClick} to="/">
          <button>Logout</button>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="login-wrapper">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <h1 className="home-header">Memegram</h1>
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderProfileLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
