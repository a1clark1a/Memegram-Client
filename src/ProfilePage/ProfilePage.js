import React, { Component } from "react";
import UserContext from "../context/UserContextProvider";
import DisplayImages from "../LandingPage/DisplayImages/DisplayImages";
import UserService from "../service/user-service";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteImage/DeleteImage";

export default class ProfilePage extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = UserContext;

  componentDidMount() {
    const { user_name } = this.props.match.params;
    this.context.clearError();
    UserService.getUserByUserName(user_name)
      .then(this.context.setUser)
      .then(() => {
        const { user } = this.context;
        UserService.getListOfImageUploadedByUser(user.id)
          .then(this.context.setMemesList)
          .catch(this.context.setError);
      })
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearMemesList();
  }

  displayImages() {
    const { memesList = [] } = this.context;
    return memesList.map(img => {
      return (
        <article className="image-art" key={img.id}>
          <DisplayImages
            url={img.url}
            title={img.title}
            upvoteCount={img.upvote_count}
            downvoteCount={img.downvote_count}
            id={img.id}
            description={img.description}
          />
          <DeleteButton id={img.id} user_id={img.user_id} />
        </article>
      );
    });
  }

  render() {
    const { user } = this.context;
    return (
      <>
        <section className="profilePage-sect sect">
          <article>
            <h1 className="prof-user-name">{user.user_name}</h1>
            <Link to={`/upload`}>
              <button className="upload-button nav-button">
                <span>UPLOAD MEME</span>
              </button>
            </Link>
          </article>
        </section>
        <section className="viewbar-sect">
          <div className="tab-wrapper">
            <h2 className="uploads-tab">
              {"<"} Uploads {">"}
            </h2>
          </div>
        </section>
        <section className="images-sect">{this.displayImages()}</section>
      </>
    );
  }
}
