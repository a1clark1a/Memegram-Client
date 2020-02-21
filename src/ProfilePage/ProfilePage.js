import React, { Component } from "react";
import UserContext from "../context/UserContextProvider";
import DisplayImages from "../LandingPage/DisplayImages/DisplayImages";
import UserService from "../service/user-service";
import "./ProfilePage.css";

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
    this.context.clearUser();
    this.context.clearMemesList();
  }

  displayImages() {
    const { memesList = [] } = this.context;
    return memesList.map(img => {
      return (
        <DisplayImages
          url={img.url}
          author={img.title}
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
    const { user } = this.context;
    return (
      <>
        <section className="profilePage-sect">
          <article>
            <div>
              <img className="profile-pic" src="" alt="imagehere" />
            </div>
            <div>
              <h1>{user.user_name}</h1>
              <h2>About</h2>
            </div>
          </article>
        </section>
        <section className="viewbar-sect">
          <div className="tab">
            <h2>Uploads</h2>
            <h2>Favorites</h2>
          </div>
        </section>
        <section className="images-sect">{this.displayImages()}</section>
      </>
    );
  }
}
