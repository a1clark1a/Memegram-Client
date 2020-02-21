import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContextProvider";
import TokenService from "../service/token-service";
import "./Navbar.css";

export default class Navbar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.forceUpdate();
  };

  renderProfileLink() {
    const user_name = TokenService.getUserName();
    return (
      <div className="profile-wrapper">
        <Link to={`/users/${user_name}`}>Profile</Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="login-wrapper">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
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
