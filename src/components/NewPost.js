import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

function NewPost({url}) {
const [newPost, setNewPost] = useState({});
const [videoID, setVideoID] = useState({})

console.log(url)

async function call(url, data = {}) {
    const options = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "cors",
    };
    const Post = await fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
        setNewPost(res);
    })
    .then(console.log(newPost))
    .then(window.location.href = '/')
    .catch(console.error);
}

function handleSubmit(e) {
    e.preventDefault();
    call(url, newPost).then((newPost) => console.log(newPost));
  }

  function handleChange(e) {
      setNewPost({...newPost, [e.target.name]: e.target.value});
    }
    
    function handleChangeVideo(e) {
        setNewPost({...newPost, [e.target.name]: e.target.value})
        setVideoID(e.target.value)   
  }
    return (
        <div className="content">
        <form onSubmit={handleSubmit}>
        <Link to={`/`} id="returnLink">
            <button className="ReturnButton">Go Back</button>
        </Link>
        <div className="Form">
            <div className="FormSection">
                <h2>Title:</h2>
                <input
                id="Title"
                name="title"
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
                placeholder="Video ID"
                className="FormField"
                onChange={handleChangeVideo}
                />
              </div>
                <br />
              <VideoPlayer video_id={videoID} />
              <div className="FormSection">
                <h2>Text:</h2>
                <textarea
                rows="5"
                cols="60"
                id="Text"
                name="text"
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

export default NewPost;