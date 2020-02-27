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

  onUploadSuccess = () => {
    const { user } = this.context;
    const { history } = this.props;
    history.push(`/users/${user.user_name}`);
  };

  handleSubmitWithUrl = e => {
    e.preventDefault();
    const { title, description, url } = e.target;
    const { user } = this.context;
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
        this.onUploadSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="upload-sect sect">
        <form className="uploadUrl-form " onSubmit={this.handleSubmitWithUrl}>
          <fieldset className="url-fieldset">
            <div role="alert">
              {error && <p className="error-message">{error}</p>}
            </div>
            <legend className="form-legend">
              {" < "}URL{" > "}
            </legend>
            <label htmlFor="url">
              Select Image <code className="req"> *</code>
            </label>
            <input
              required
              type="url"
              id="url"
              name="url"
              aria-label="url"
              aria-required="true"
              size="25"
              placeholder="https://example.com/example.jpg"
            />

            <label htmlFor="title">
              Title <code className="req"> *</code>
            </label>
            <input
              required
              type="text"
              id="title"
              name="title"
              aria-label="title"
              aria-required="true"
              placeholder="Title of Meme"
            />

            <label htmlFor="description">
              description<code className="req"> *</code>
            </label>
            <input
              required
              type="text"
              id="description"
              name="description"
              aria-label="description"
              aria-required="true"
              placeholder="description of Meme"
            />

            <button
              htmlFor="uploadUrl-form"
              className="upload-button nav-button button"
              type="submit"
            >
              <span>Submit</span>
            </button>
          </fieldset>
        </form>

        <form className="upload-form">
          <fieldset className="upload-fieldset">
            <h3 className="in-dev warning">IN DEVELOPMENT</h3>
            <legend className="form-legend">
              {" < "}File{" > "}
            </legend>
            <label htmlFor="upload">
              Select Image
              <input
                type="file"
                id="upload"
                name="upload"
                accept="image/*"
                aria-label="Upload"
                aria-required="true"
              />
            </label>
            <button
              className="upload-button nav-button button disabled"
              htmlFor="upload-form"
              type="submit"
              disabled={true}
            >
              <span>Submit</span>
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}
