import React, { Component } from "react";
import ImageService from "../service/image-service";
import ImagesListConext from "../context/ImageListContextProvider";
import DisplayImages from "./DisplayImages/DisplayImages";
//import PropTypes from "prop-types"; TODO update to use proptypes once API server is setup
import "./LandingPage.css";

class LandingPage extends Component {
  static contextType = ImagesListConext;
  componentDidMount() {
    this.context.clearError();
    ImageService.getListOfImage()
      .then(this.context.setImagesList)
      .catch(this.context.setError);
  }

  displayImages() {
    const { imagesList = [] } = this.context;
    return imagesList.map(img => {
      return (
        <DisplayImages
          url={img.download_url}
          author={img.author}
          key={img.id}
          id={img.id}
        />
      );
    });
  }

  render() {
    return (
      <>
        <header className="banner" role="banner">
          <h1>Memegram</h1>
        </header>
        <section className="images-sect">
          <div className="image-container">{this.displayImages()}</div>
        </section>
      </>
    );
  }
}

export default LandingPage;
