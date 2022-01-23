import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {


  return (
    <div>
    <Link to={`/details/${props.post.id}`}>
      <div>
        <h3>{props.post.title}</h3>
        <iframe width = "850" height = "480" className = "videoCard" src={props.post.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </Link>
    </div>
  );
}

export default PostCard;
