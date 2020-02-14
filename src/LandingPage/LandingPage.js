import React, { Component } from "react";
import ImageService from "../service/image-service";
import ImagesListConext from "../context/ImageListContextProvider";
//import PropTypes from "prop-types"; TODO update to use proptypes once API server is setup
import "./LandingPage.css";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  static contextType = ImagesListConext;
  componentDidMount() {
    this.context.clearError();
    ImageService.getListOfImage()
      .then(this.context.setImagesList)
      .catch(this.context.setError);
  }
  render() {
    const { imagesList = [] } = this.context;
    const display = imagesList.map((img, i) => {
      return (
        <Link to={"/image"} key={i}>
          <img
            className="landing-image"
            src={img.download_url}
            alt={img.author}
          />
        </Link>
      );
    });

    return (
      <>
        <header className="banner" role="banner">
          <h1>Memegram</h1>
          <h2>Browse and Upload Endless memes</h2>
        </header>
        <section className="images-sect">
          <div className="image-container">{display}</div>
        </section>
      </>
    );
  }
}

export default LandingPage;
