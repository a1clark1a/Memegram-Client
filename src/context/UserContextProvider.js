import React, { Component } from "react";

const UserContext = React.createContext({
  user: {},
  memesList: [],
  error: null,
  setUser: () => {},
  clearUser: () => {},
  setError: () => {},
  clearError: () => {},
  setMemesList: () => {},
  clearMemesList: () => {},
  deleteImageFromList: () => {}
});

export default UserContext;

export class UserContextProvider extends Component {
  state = {
    user: {},
    memesList: [],
    error: null
  };

  setUser = user => {
    this.setState({
      user
    });
  };

  clearUser = () => {
    this.setUser({ user: {} });
    this.setMemesList([]);
  };

  setError = error => {
    this.setState({
      error
    });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setMemesList = memesList => {
    this.setState({ memesList });
  };

  clearMemesList = () => {
    this.setState({ memesList: [] });
  };

  deleteImageFromList = imageId => {
    const newImageList = this.state.memesList.filter(img => {
      return img.id !== imageId;
    });
    this.setState({
      memesList: newImageList
    });
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
      setMemesList: this.setMemesList,
      clearMemesList: this.clearMemesList,
      deleteImageFromList: this.deleteImageFromList
    };
    return (
      <UserContext.Provider value={contextValue}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
