import React from "react";
import { Link } from "react-router-dom";

const DisplayImages = props => {
  return (
    <Link to={`/image/${props.id}`} key={props.id}>
      <img className="landing-image" src={props.url} alt={props.author} />
      <p>Description here...</p>
    </Link>
  );
};

export default DisplayImages;
