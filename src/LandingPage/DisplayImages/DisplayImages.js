import React from "react";
import { Link } from "react-router-dom";

const DisplayImages = props => {
  return (
    <Link className="individ-wrapper" to={`/image/${props.id}`} key={props.id}>
      <img className="landing-image" src={props.url} alt={props.author} />
      <div>
        <code>{props.upvoteCount} </code>
        <code>{props.downvoteCount} </code>
      </div>
      <p className="display-img-description">{props.description}</p>
    </Link>
  );
};

export default DisplayImages;
