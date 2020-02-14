import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import ImagePage from "./ImagePage/ImagePage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import { ImagesListProvider } from "./context/ImageListContextProvider";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import "./App.css";
import { ImageProvider } from "./context/ImageContextProvider";

class App extends Component {
  render() {
    return (
      <ImagesListProvider>
        <ImageProvider>
          <Navbar />
          <main>
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route path={"/image/:imageId"} component={ImagePage} />
              <Route path={"/login"} component={LoginPage} />
              <Route path={"/register"} component={RegisterPage} />
              <Route path="/*" component={NotFoundPage} />
            </Switch>
          </main>
        </ImageProvider>
      </ImagesListProvider>
    );
  }
}

export default App;
