import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContextProvider";
import TokenService from "../service/token-service";
import "./Navbar.css";

export default class Navbar extends Component {
  static contextType = UserContext;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.clearUser();
  };

  renderProfileLink() {
    const user_name = this.context.user.user_name;
    console.log("from nav", user_name);
    return (
      <div className="profile-wrapper">
        <Link to={`/users/${user_name}`}>
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
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
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
        {!this.context.user.user_name && !TokenService.hasAuthToken()
          ? this.renderLoginLink()
          : this.renderProfileLink()}
      </nav>
    );
  }
}
