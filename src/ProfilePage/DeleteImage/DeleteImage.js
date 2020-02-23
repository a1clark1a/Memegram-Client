import React, { Component } from "react";
import UserContext from "../../context/UserContextProvider";
import ImageService from "../../service/image-service";

export default class DeleteButton extends Component {
  static contextType = UserContext;

  handleDeleteButton = (imageId, userId) => {
    this.context.clearError();
    console.log("delete function called");
    ImageService.deleteImageUploadedByUser(imageId, userId)
      .then(() => this.context.deleteImageFromList(imageId))
      .catch(this.context.setError);
    this.props.reRender();
  };

  render() {
    const { id, user_id } = this.props;
    return (
      <button onClick={() => this.handleDeleteButton(id, user_id)} id={id}>
        Delete
      </button>
    );
  }
}
