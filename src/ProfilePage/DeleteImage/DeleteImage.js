import React, { Component } from "react";
import UserContext from "../../context/UserContextProvider";
import ImageService from "../../service/image-service";

export default class DeleteButton extends Component {
  static contextType = UserContext;

  handleDeleteButton = (imageId, userId) => {
    this.context.clearError();
    ImageService.deleteImageUploadedByUser(imageId, userId)
      .then(() => this.context.deleteImageFromList(imageId))
      .catch(this.context.setError);
  };

  render() {
    const { id, user_id } = this.props;
    return (
      <button
        className="delete_button nav-button"
        onClick={() => this.handleDeleteButton(id, user_id)}
        id={id}
      >
        <span>Delete</span>
      </button>
    );
  }
}
