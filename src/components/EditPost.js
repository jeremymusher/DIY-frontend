import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

function EditPost(props) {
    const [post, setPost] = useState({});
    const [videoID, setVideoID] = useState({})
    const url = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "https://musher-diy-backend.herokuapp.com/"
    const Fetchurl = `${url}posts/${props.match.params._id}`;
    const redirectPage = `/details/${props.match.params._id}`

    async function call(url, data = {}) {
        const options = {
            method: "PATCH",
            action: redirectPage,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            mode: "cors",
        };
        await fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            setPost(res);
        })
        .then(window.location.href = redirectPage)
        .catch(console.error);
    }
    
    useEffect(() => {
        fetch(Fetchurl)
        .then((res) => res.json())
        .then((res) => setPost(res))
        .catch(console.error);
    }, []);
    
    const vidID = videoID.length > 0 ? videoID : post.video_id;

    function handleSubmit(e) {
        e.preventDefault();
        call(Fetchurl, post).then(console.log(post));
      }
    
      function handleChange(e) {
          setPost({...post, [e.target.name]: e.target.value})   
      }

      function handleChangeVideo(e) {
          setPost({...post, [e.target.name]: e.target.value})
          setVideoID(e.target.value)    
      }

      function handleDelete() {
        fetch(Fetchurl, { method: "DELETE" });
      }

    return(
    <div className="content">
        <form onSubmit={handleSubmit}>
        <Link to={`/details/${props.match.params._id}`} id="returnLink">
            <button className="ReturnButton">Go Back</button>
        </Link>
        <Link to={'/'}>
        <button className="DeleteButton" onClick={handleDelete}>
                Delete Post
        </button>
        </Link>
        <div className="Form">
            <div className="FormSection">
                <h2>Title:</h2>
                <input
                id="Title"
                name="title"
                defaultValue={post.title}
                placeholder="Title:"
                className="FormField"
                onChange={handleChange}
                />
            </div>
            <div className="FormSection">
                <h2>Author:</h2>
                <input
                id="Author"
                name="author"
                defaultValue={post.author}
                placeholder="Author:"
                className="FormField"
                onChange={handleChange}
                />
              </div>
              <div className="FormSection">
                <h2>Video ID:</h2>
                <input
                id="VideoID"
                name="video_id"
                defaultValue={post.video_id}
                placeholder="Video ID"
                className="FormField"
                onChange={handleChangeVideo}
                />
              </div>
                <br />
              <VideoPlayer video_id={vidID} />
              <div className="FormSection">
                <h2>Text:</h2>
                <textarea
                rows="5"
                cols="60"
                id="Text"
                name="text"
                defaultValue={post.text}
                placeholder="Text:"
                className="FormField"
                onChange={handleChange}
                />
              </div>
          </div>
          <br /> 
          <input type="submit" value="Submit"/>
        </form>
    </div>
    )
}


export default EditPost;