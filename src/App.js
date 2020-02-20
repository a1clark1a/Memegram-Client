import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import ImagePage from "./ImagePage/ImagePage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterForm";
import { ImagesListProvider } from "./context/ImageListContextProvider";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import PublicOnlyRoute from "./Utility/PublicOnlyRoute";
import "./App.css";
import { ImageProvider } from "./context/ImageContextProvider";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
      <ImagesListProvider>
        <ImageProvider>
          <Navbar />
          <main>
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route path={"/image/:imageId"} component={ImagePage} />
              <PublicOnlyRoute path={"/login"} component={LoginPage} />
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