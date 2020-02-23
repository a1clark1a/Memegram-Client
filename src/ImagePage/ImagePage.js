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
      .then(res => {
        this.context.setImage(res);
      })
      .then(() => {
        const { image } = this.context;
        ImageService.getImagePoster(image.user_id)
          .then(user => this.context.addUserName(user.user_name))
          .catch(this.context.setError);
      })
      .catch(this.context.setError);
    ImageService.getCommentsForClickedImage(imageId)
      .then(this.context.setComments)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearImage();
    this.context.clearComments();
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
    const { image, user_name } = this.context;
    return (
      <div className="image-wrapper">
        <h1 className="image-title">{image.title}</h1>
        <img className="clicked-image" src={image.url} alt={image.title} />
        {/*<ButtonWrapper
          onUpvoteClick={() => this.handleUpvoteClick(imageId, image)}
          onDownvoteClick={() => this.handleDownvoteClick(imageId, image)}
          upvote={image.upvote_count}
          downvote={image.downvote_count}
        />*/}
        <h1>{user_name}</h1>
        <p className="image-description">{image.description}</p>
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
