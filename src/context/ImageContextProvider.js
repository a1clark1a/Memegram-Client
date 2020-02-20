import React, { Component } from "react";

const ImageContext = React.createContext({
  image: {},
  comments: [],
  error: null,
  setError: () => {},
  setImage: () => {},
  clearError: () => {},
  clearImage: () => {},
  setComments: () => {},
  addComments: () => {},
  clearComments: () => {}
});

export default ImageContext;

export class ImageProvider extends Component {
  state = {
    image: {},
    comments: [],
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
    this.setImage({});
    this.setComments([]);
  };

  setComments = comments => {
    this.setState({ comments });
  };

  clearComments = () => {
    this.setComments([]);
  };

  addComments = comment => {
    this.setComments([...this.state.comments, comment]);
  };

  render() {
    const contextValue = {
      image: this.state.image,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setImage: this.setImage,
      clearImage: this.clearImage,
      setComments: this.setComments,
      clearComments: this.clearComments,
      addComments: this.addComments
    };
    return (
      <ImageContext.Provider value={contextValue}>
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
