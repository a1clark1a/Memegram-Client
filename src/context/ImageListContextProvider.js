import React, { Component } from "react";

const ImagesListContext = React.createContext({
  imagesList: [],
  error: null,
  setError: () => {},
  setImagesList: () => {},
  clearError: () => {}
});

export default ImagesListContext;

export class ImagesListProvider extends Component {
  state = {
    imagesList: [],
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  setImagesList = imagesList => {
    this.setState({ imagesList });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const contextValue = {
      imagesList: this.state.imagesList,
      error: this.state.error,
      clearError: this.clearError,
      setImagesList: this.setImagesList
    };
    return (
      <ImagesListContext.Provider value={contextValue}>
        {this.props.children}
      </ImagesListContext.Provider>
    );
  }
}
