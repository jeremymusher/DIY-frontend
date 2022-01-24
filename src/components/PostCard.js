import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
const youtubeURL = `https://img.youtube.com/vi/${props.post.video_id}/0.jpg`

  return (
    <Link to={`/details/${props.post.id}`}>
      <div className="cardDiv">
        <img src={youtubeURL} alt="youtube thumbnail"/>
        <h1>{props.post.title}</h1>
      </div>
    </Link>
  );
}

export default PostCard;
