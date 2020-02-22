import React, { Component } from "react";
import ImageService from "../../service/image-service";
import ImageContext from "../../context/ImageContextProvider";
import { Redirect } from "react-router-dom";
import "./CommentSection.css";
import TokenService from "../../service/token-service";

export default class CommentSection extends Component {
  static contextType = ImageContext;
  state = {
    makeComment: false
  };

  handleMakeCommentClick = () => {
    this.setState({ makeComment: !this.state.makeComment });
  };

  handleSubmitComment = e => {
    e.preventDefault();
    const { image } = this.context;
    const { comment } = e.target;

    ImageService.postComment(image.id, comment.value)
      .then(this.context.addComments)
      .then(() => {
        comment.value = "";
        this.handleMakeCommentClick();
      })
      .catch(this.context.setError);
  };

  displayMakeCommentButton = () => {
    return (
      <button
        type="button"
        className="makeButton"
        onClick={e => this.handleMakeCommentClick(e)}
      >
        Make a Comment
      </button>
    );
  };

  displayWriteCommentInput = () => {
    const display = TokenService.hasAuthToken() ? (
      <div className="comment-wrapper">
        <textarea
          className="comment"
          type="text"
          id="comment"
          name="comment"
          aria-label="Write comment here..."
          placeholder="write comment here..."
        ></textarea>
        <button type="submit">Submit Comment</button>
      </div>
    ) : (
      <Redirect to={"/login"} />
    );

    return display;
  };

  renderComments = () => {
    const { comments } = this.context;

    const listOfComments = comments.map(comment => {
      return (
        <li key={comment.id}>
          <p>
            <code>By User:{comment.user_id} = </code>
            {comment.comment}
          </p>
          <p>
            <code>{comment.date_created}</code>
          </p>
        </li>
      );
    });

    return <ul className="comments-list">{listOfComments}</ul>;
  };
  render() {
    return (
      <section className="comment-sect">
        <div className="comment-wrapper">{this.renderComments()}</div>
        <form className="comment-form" onSubmit={this.handleSubmitComment}>
          {this.state.makeComment
            ? this.displayWriteCommentInput()
            : this.displayMakeCommentButton()}
        </form>
      </section>
    );
  }
}
