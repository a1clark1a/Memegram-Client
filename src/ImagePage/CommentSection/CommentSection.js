import React, { Component } from "react";
import "./CommentSection.css";

export default class CommentSection extends Component {
  state = {
    makeComment: false
  };

  handleMakeCommentClick = e => {
    this.setState({ makeComment: true });
  };

  renderCommentForm() {
    const { makeComment } = this.state;
    const displayMakeCommentButton = () => {
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
    const displayWriteCommentInput = () => {
      return (
        <div className="comment-wrapper">
          <input
            className="comment"
            type="text"
            placeholder="write comment here"
          ></input>
        </div>
      );
    };

    return makeComment
      ? displayWriteCommentInput()
      : displayMakeCommentButton();
  }
  render() {
    return (
      <section className="comment-sect">
        <div className="comment-wrapper">
          <ul>
            <li>First Comment</li>
            <li>Second Comment</li>
            <li>Third Comment</li>
          </ul>
        </div>
        <form className="comment-form">{this.renderCommentForm()}</form>
      </section>
    );
  }
}
