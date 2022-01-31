import React, { useState, useEffect } from "react";
import Results from './Results'
import { Link } from "react-router-dom";

function Home({url}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${url}posts`)
          .then((res) => res.json())
          .then((json) => {
            setPosts(json);
          })
          .catch(console.error);
      }, []);

    return (
        <div className="content">
          <div className="TopBarResults">
          <Link to={"/new"} className='newPostButton'>
                <button> Create a New Post</button>
          </Link>
          </div>
          <Results posts={posts} url={url}/>
        </div>
    );
}

export default Home;