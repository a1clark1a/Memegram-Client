import React, { Component } from "react";
import CommentSection from "./CommentSection/CommentSection";
import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
import "./ImagePage.css";

export default class ImagePage extends Component {
  render() {
    return (
      <>
        <section className="image-sect">
          <div className="image-wrapper">
            <h1 className="image-title">Title of meme</h1>
            <img className="clicked-image" src="" alt="" />
            <ButtonWrapper />
          </div>
        </section>
        <CommentSection />
      </>
    );
  }
}
