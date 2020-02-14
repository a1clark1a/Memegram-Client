import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
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
        {this.renderLoginLink()}
      </nav>
    );
  }
}
