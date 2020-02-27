import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import ImagePage from "./ImagePage/ImagePage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import { ImagesListProvider } from "./context/ImageListContextProvider";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import PublicOnlyRoute from "./Utility/PublicOnlyRoute";
import "./App.css";
import { ImageProvider } from "./context/ImageContextProvider";
import { UserContextProvider } from "./context/UserContextProvider";
import ProfilePage from "./ProfilePage/ProfilePage";
import PrivateOnlyRoute from "./Utility/PrivateOnlyRoute";
import UploadImageForm from "./ProfilePage/UploadImage/UploadImageForm";

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
          <UserContextProvider>
            <Navbar />
            <main role="main">
              {this.state.hasError && (
                <p className="warning">There was an error! Oh no!</p>
              )}
              <Switch>
                <Route exact path={"/"} component={LandingPage} />
                <Route path={"/image/:imageId"} component={ImagePage} />
                <PublicOnlyRoute path={"/login"} component={LoginPage} />
                <PublicOnlyRoute path={"/register"} component={RegisterPage} />
                <PrivateOnlyRoute
                  path={"/users/:user_name"}
                  component={ProfilePage}
                />
                <PrivateOnlyRoute
                  path={"/upload"}
                  component={UploadImageForm}
                />
                <Route path="/*" component={NotFoundPage} />
              </Switch>
              <footer>
                <code>
                  <a
                    href="https://acperfecto.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anthony Clark Perfecto @{new Date().getFullYear()}
                  </a>
                </code>
              </footer>
            </main>
          </UserContextProvider>
        </ImageProvider>
      </ImagesListProvider>
    );
  }
}

export default App;
