import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import ImagePage from "./ImagePage/ImagePage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import { ImagesListProvider } from "./context/ImageListContextProvider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ImagesListProvider>
        <Navbar />
        <main>
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/image"} component={ImagePage} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/register"} component={RegisterPage} />
          </Switch>
        </main>
      </ImagesListProvider>
    );
  }
}

export default App;
