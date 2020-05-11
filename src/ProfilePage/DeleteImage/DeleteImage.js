import React, { Component, useState, useContext } from "react";

import UserContext from "../../context/UserContextProvider";
import ImageService from "../../service/image-service";

import DeleteModal from "../../Utility/DeleteModal/DeleteModal";

export default function DeleteButton(props) {
  const { id, user_id } = props;
  const contextType = useContext(UserContext);

  const handleDeleteButton = (imageId, userId) => {
    contextType.clearError();
    ImageService.deleteImageUploadedByUser(imageId, userId)
      .then(() => contextType.deleteImageFromList(imageId))
      .catch(contextType.setError);
  };

  return <DeleteModal handleConfirm={() => handleDeleteButton(id, user_id)} />;
}
