import React from "react";
import { Link } from "react-router-dom";

const DisplayImages = props => {
  return (
    <Link className="individ-wrapper" to={`/image/${props.id}`} key={props.id}>
      <img className="landing-image" src={props.url} alt={props.title} />
      <div>
        <code>{props.upvoteCount} </code>
        <code>{props.downvoteCount} </code>
      </div>
      <p className="display-img-title">{props.title}</p>
    </Link>
  );
};

export default DisplayImages;
