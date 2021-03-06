import React, { Component } from "react";
import CommentSection from "./CommentSection/CommentSection";
//import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
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
    this.context.clearUser();
  }

  handleUpvoteClick = (imageId, image) => {
    this.context.clearError();
    image.upvote_count++;
    ImageService.updateImage(imageId, image).catch(this.context.setError);
  };

  handleDownvoteClick = (imageId, image) => {
    this.context.clearError();
    image.downvote_count++;
    ImageService.updateImage(imageId, image).catch(this.context.setError);
  };

  renderImagePage() {
    //  const { imageId } = this.props.match.params;
    const { image } = this.context;
    return (
      <div className="image-wrapper">
        <div className="title-wrapper">
          <h1 className="image-title">{image.title}</h1>
        </div>
        <img className="clicked-image" src={image.url} alt={image.title} />
        {/*<ButtonWrapper
          onUpvoteClick={() => this.handleUpvoteClick(imageId, image)}
          onDownvoteClick={() => this.handleDownvoteClick(imageId, image)}
          upvote={image.upvote_count}
          downvote={image.downvote_count}
        />*/}
        <h1>{image.user.user_name}</h1>
        <p className="image-description">{image.description}</p>
      </div>
    );
  }

  render() {
    return (
      <section className="image-sect sect">
        {this.renderImagePage()}
        <CommentSection />
      </section>
    );
  }
}
