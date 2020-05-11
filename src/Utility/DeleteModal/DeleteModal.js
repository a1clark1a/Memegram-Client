import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const DeleteModal = ({ handleConfirm }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="delete-modal">
      <button
        className="button delete_button nav-button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-describedby="Delete-modal-description"
      >
        <DialogContent>
          <DialogContentText id="Delete-modal-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="button" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button className="button" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
