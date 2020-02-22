import React, { Component } from "react";
import ImageService from "../../service/image-service";
import UserContext from "../../context/UserContextProvider";
import "./UploadImageForm.css";

export default class UploadImageForm extends Component {
  static contextType = UserContext;
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  state = {
    error: null
  };

  onLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  handleSubmitWithUrl = e => {
    e.preventDefault();
    const { title, description, url } = e.target;
    const { user } = this.context;
    console.log(user);
    this.setState({ error: null });
    ImageService.postImageWithURL({
      title: title.value,
      description: description.value,
      url: url.value,
      user_id: user.id
    })
      .then(() => {
        title.value = "";
        description.value = "";
        url.value = "";
        this.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="form-sect">
        <form className="upload-form">
          <div role="alert">
            {error && <p className="error-message">{error}</p>}
          </div>

          <fieldset className="upload-fieldset">
            <h3 className="in-dev warning">IN DEVELOPMENT</h3>
            <legend>Upload Image File</legend>
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
            <button type="submit" disabled={true}>
              Submit
            </button>
          </fieldset>
        </form>
        <form className="uploadUrl-form" onSubmit={this.handleSubmitWithUrl}>
          <div role="alert">
            {error && <p className="error-message">{error}</p>}
          </div>
          <fieldset className="url-fieldset">
            <legend>Upload URL Image</legend>
            <label htmlFor="title">
              <input
                type="text"
                id="title"
                name="title"
                aria-label="title"
                aria-required="true"
                placeholder="Title of Meme"
              />
            </label>
            <label htmlFor="description">
              <input
                type="text"
                id="description"
                name="description"
                aria-label="description"
                aria-required="true"
                placeholder="description of Meme"
              />
            </label>
            <label htmlFor="url">
              Select Image{" "}
              <input
                type="url"
                id="url"
                name="url"
                aria-label="url"
                aria-required="true"
                size="25"
                placeholder="https://example.com/example.jpg"
              />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>
    );
  }
}
