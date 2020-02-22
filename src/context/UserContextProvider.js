import React, { Component } from "react";

const UserContext = React.createContext({
  user: {},
  memesList: [],
  error: null,
  setUser: () => {},
  clearUser: () => {},
  setError: () => {},
  clearError: () => {},
  UploadMeme: () => {},
  setMemesList: () => {},
  clearMemesList: () => {}
});

export default UserContext;

export class UserContextProvider extends Component {
  state = {
    user: {},
    memesList: [],
    error: null
  };

  setUser = user => {
    console.log("setting user", user);
    this.setState({
      user
    });
  };

  clearUser = () => {
    console.log("clearing user");
    this.setUser({ user: {} });
    this.setMemesList([]);
  };

  setError = error => {
    console.log(error);
    this.setState({
      error
    });
  };

  clearError = () => {
    console.log("clearing error");
    this.setState({ error: null });
  };

  UploadMeme = meme => {
    //TODO upload meme
  };

  setMemesList = memesList => {
    console.log("setting memesList", memesList);
    this.setState({ memesList });
  };

  clearMemesList = () => {
    console.log("clearing memeslist");
    this.setState({ memesList: [] });
  };

  render() {
    const contextValue = {
      user: this.state.user,
      memesList: this.state.memesList,
      error: this.state.error,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setError: this.setError,
      clearError: this.clearError,
      UploadMeme: this.UploadMeme,
      setMemesList: this.setMemesList,
      clearMemesList: this.clearMemesList
    };
    return (
      <UserContext.Provider value={contextValue}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
