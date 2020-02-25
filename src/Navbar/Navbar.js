import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContextProvider";
import TokenService from "../service/token-service";
import "./Navbar.css";
import MG from "../icons/MG.png";

export default class Navbar extends Component {
  static contextType = UserContext;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.clearUser();
  };

  renderProfileLink() {
    const { user } = this.context;
    const current_user = user.user_name
      ? user.user_name
      : TokenService.getUserName();
    console.log("from nav", current_user);
    return (
      <div className="profile-wrapper">
        <Link to={`/users/${current_user}`}>
          <button onClick={this.smoothScrollToTop}>Profile</button>
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
        <Link to="/login" className="login-link">
          <span>Log in </span>
        </Link>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
    );
  }

  smoothScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <div className="icon-wrapper" onClick={this.smoothScrollToTop}>
            <img className="app-icon" src={MG} alt="App-Icon" />
            <h1 className="home-header">
              <span>Memegram</span>
            </h1>
          </div>
        </Link>
        {!TokenService.hasAuthToken()
          ? this.renderLoginLink()
          : this.renderProfileLink()}
      </nav>
    );
  }
}
