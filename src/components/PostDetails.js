import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

function PostDetails(props) {
    const url = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "https://musher-diy-backend.herokuapp.com/"
    const [post, setPost] = useState({});
    const Fetchurl = `${url}posts/${props.match.params._id}`;
    

    useEffect(() => {
        fetch(Fetchurl)
            .then((res) => res.json())
            .then((res) => setPost(res))
            .catch(console.error);
    }, []);

    return (
        <div className="content">
            <h1 className="title">{post.title}</h1>
            <h2>Created By: {post.author}</h2>
            <VideoPlayer video_id={post.video_id} />
            <div className="postText">
                <h2>{post.text}</h2>
            </div>
            <Link to={`/update/${post.id}`} >
            <button>Edit Post</button>
            </ Link>
        </div>
    )
}

export default PostDetails;