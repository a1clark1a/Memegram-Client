import React from "react";
import TokenService from "../../service/token-service";

const ButtonWrapper = props => {
  return (
    <div className="button-wrapper">
      <button
        disabled={TokenService.hasAuthToken() ? false : true}
        onClick={props.onUpvoteClick}
      >
        {props.upvote} Upvote
      </button>
      <button
        disabled={TokenService.hasAuthToken() ? false : true}
        onClick={props.onDownvoteClick}
      >
        {props.downvote} Downvote
      </button>
    </div>
  );
};

export default ButtonWrapper;
