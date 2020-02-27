import React, { Component } from "react";

export const nullMemeObjectShap = {
  user: {},
  tags: []
};

const ImageContext = React.createContext({
  image: nullMemeObjectShap,
  user_name: "",
  comments: [nullMemeObjectShap],
  error: null,
  setError: () => {},
  setImage: () => {},
  clearError: () => {},
  clearImage: () => {},
  setComments: () => {},
  addComments: () => {},
  clearComments: () => {},
  addUserName: () => {},
  clearUser: () => {}
});

export default ImageContext;

export class ImageProvider extends Component {
  state = {
    image: nullMemeObjectShap,
    user_name: "",
    comments: [nullMemeObjectShap],
    error: null
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setImage = image => {
    this.setState({ image });
  };

  clearImage = () => {
    this.setImage(nullMemeObjectShap);
    this.clearComments();
  };

  setComments = comments => {
    this.setState({ comments });
  };

  clearComments = () => {
    this.setComments([nullMemeObjectShap]);
  };

  addComments = comment => {
    this.setComments([...this.state.comments, comment]);
  };

  addUserName = user_name => {
    this.setState({ user_name });
  };

  clearUser = () => {
    this.addUserName("");
  };

  render() {
    const contextValue = {
      image: this.state.image,
      user_name: this.state.user_name,
      comments: this.state.comments,
      error: this.state.error,

      setError: this.setError,
      clearError: this.clearError,
      setImage: this.setImage,
      clearImage: this.clearImage,
      setComments: this.setComments,
      clearComments: this.clearComments,
      addComments: this.addComments,
      addUserName: this.addUserName,
      clearUser: this.clearUser
    };
    return (
      <ImageContext.Provider value={contextValue}>
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
