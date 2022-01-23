import { useState, useEffect } from "react";

function PostDetails(props) {
    const [post, setPost] = useState([]);
    const url = `http://localhost:8000/posts/${props.match.params._id}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setPost(res))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>{post.title}</h1>
            <h2>Created By: {post.author}</h2>
            <iframe width = "850" height = "480" className = "videoCard" src={post.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h2>{post.text}</h2>
        </div>
    )
}

export default PostDetails;