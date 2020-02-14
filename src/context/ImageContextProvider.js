import React, { Component } from "react";

const ImageContext = React.createContext({
  image: "", //url for now
  error: null,
  setError: () => {},
  setImage: () => {},
  clearError: () => {},
  clearImage: () => {}
});

export default ImageContext;

export class ImageProvider extends Component {
  state = {
    thing: "",
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setImage = image => {
    this.setState({ image });
  };

  clearImage = () => {
    this.setImage("");
  };

  render() {
    const contextValue = {
      image: this.state.image,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setImage: this.setImage,
      clearImage: this.clearImage
    };
    return (
      <ImageContext.Provider value={contextValue}>
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
