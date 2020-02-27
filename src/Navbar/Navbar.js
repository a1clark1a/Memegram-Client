import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContextProvider";
import TokenService from "../service/token-service";
import "./Navbar.css";
import AuthApiService from "../service/auth-api-service";
import UserService from "../service/user-service";

export default class Navbar extends Component {
  static contextType = UserContext;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.clearUser();
  };

  //for demo only
  state = {
    error: null
  };

  //for demo only
  handleLoginSuccess = user_name => {
    UserService.getUserByUserName(user_name)
      .then(this.context.setUser)
      .catch(this.context.setError);
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  //for demo only
  demoLogin = () => {
    this.setState({
      error: null
    });
    AuthApiService.postLoginUser({
      user_name: "UserDemo",
      password: "Password1!"
    })
      .then(res => {
        TokenService.saveAuthTokenAndUserName(res.authToken, res.user_name);
        this.onLoginSucces(res.user_name);
      })
      .catch(res => this.setState({ error: res.error }));
  };

  renderProfileLink() {
    const { user } = this.context;
    const current_user = user.user_name
      ? user.user_name
      : TokenService.getUserName();
    return (
      <div className="profile-wrapper">
        <Link
          className="link-button"
          onClick={this.smoothScrollToTop}
          to={`/users/${current_user}`}
        >
          <span>Profile </span>
        </Link>
        <Link onClick={this.handleLogoutClick} to="/">
          <button className="nav-button">
            <span>Logout </span>
          </button>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="login-wrapper">
        <button onClick={this.demoLogin} className="nav-button">
          <span>DEMO USER</span>
        </button>
        <Link to="/login" className="link-button">
          <span>Log in </span>
        </Link>
        <Link to="/register">
          <button className="register-button nav-button">
            <span>Register </span>
          </button>
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
