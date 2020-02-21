import React, { Component } from "react";
import "./UploadImageForm.css";

export default class UploadImageForm extends Component {
  render() {
    return (
      <form className="upload-form">
        <fieldset className="upload-fieldset">
          <legend>Upload Image</legend>
          <label htmlFor="upload">
            Select Image{" "}
            <input
              type="file"
              id="upload"
              name="upload"
              accept="image/*"
              aria-label="Upload"
              aria-required="true"
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}
