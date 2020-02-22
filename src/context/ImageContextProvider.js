import React, { Component } from "react";

const ImageContext = React.createContext({
  image: {},
  user_name: "",
  comments: [],
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
    image: {},
    user_name: "",
    comments: [],
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    console.log("clearing error");
    this.setState({ error: null });
  };

  setImage = image => {
    console.log("setting image", image);
    this.setState({ image });
  };

  clearImage = () => {
    console.log("clearing the image");
    this.setImage({});
    this.setComments([]);
  };

  setComments = comments => {
    console.log("setting comments", comments);
    this.setState({ comments });
  };

  clearComments = () => {
    console.log("clearing comments");
    this.setComments([]);
  };

  addComments = comment => {
    console.log("adding comment", comment);
    this.setComments([...this.state.comments, comment]);
  };

  addUserName = user_name => {
    console.log("adding user_name", user_name);
    this.setState({ user_name });
  };

  clearUser = () => {
    console.log("clearing user");
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
