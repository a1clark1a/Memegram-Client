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
      .then(this.context.setImage)
      .catch(this.context.setError);
    ImageService.getCommentsForClickedImage(imageId)
      .then(this.context.setComments)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearImage();
    this.context.clearComments();
  }

  handleUpvoteClick = () => {
    const { imageId } = this.props.match.params;
    const { image } = this.context;
    image.upvote_count++;
    ImageService.updateImage(imageId, image)
      .then(this.context.setImage)
      .catch(this.context.setError);
  };

  handleDownvoteClick = cb => {
    this.context.clearError();
    const { imageId } = this.props.match.params;
    const { image } = this.context;
    image.downvote_count++;
    ImageService.updateImage(imageId, image)
      .then(this.context.setImage)
      .catch(this.context.setError);
  };

  renderImagePage() {
    const { image } = this.context;
    return (
      <div className="image-wrapper">
        <h1 className="image-title">{image.title}</h1>
        <img className="clicked-image" src={image.url} alt={image.title} />
        <ButtonWrapper
          onUpvoteClick={this.handleUpvoteClick}
          onDownvoteClick={this.handleDownvoteClick}
          upvote={image.upvote_count}
          downvote={image.downvote_count}
        />
        <p className="image-description">{image.description}</p>
      </div>
    );
  }

  render() {
    const { comments } = this.context;
    return (
      <section className="image-sect">
        {this.renderImagePage()}
        <CommentSection commentsArray={comments} />
      </section>
    );
  }
}
