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
          url={img.url}
          title={img.title}
          upvoteCount={img.upvote_count}
          downvoteCount={img.downvote_count}
          key={img.id}
          id={img.id}
          description={img.description}
        />
      );
    });
  }

  render() {
    return (
      <section className="images-sect sect">
        <div className="image-container">{this.displayImages()}</div>
      </section>
    );
  }
}

export default LandingPage;
