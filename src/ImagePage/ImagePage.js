import React, { Component } from "react";
import CommentSection from "./CommentSection/CommentSection";
import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
import ImageService from "../service/image-service";
import ImageContext from "../context/ImageContextProvider";
import "./ImagePage.css";

export default class ImagePage extends Component {
  static contextType = ImageContext;
  static defaultProps = {
    match: { params: {} }
  };

  componentDidMount() {
    const { imageId } = this.props.match.params;
    this.context.clearError();
    ImageService.getClickedImage(imageId)
      .then(res => this.context.setImage(res.download_url))
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearImage();
  }

  renderImagePage() {
    const { image } = this.context;
    return (
      <div className="image-wrapper">
        <h1 className="image-title">Title of meme</h1>
        <img className="clicked-image" src={image} alt="" />
        <ButtonWrapper />
        <p>Description here...</p>
      </div>
    );
  }

  render() {
    return (
      <section className="image-sect">
        {this.renderImagePage()}
        <CommentSection />
      </section>
    );
  }
}
