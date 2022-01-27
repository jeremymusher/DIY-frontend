import React, { useState, useEffect } from "react";
import Results from './Results'

function Home() {
    const [posts, setPosts] = useState([]);
    const url = `${process.env.REACT_APP_API_URL}posts`;

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            setPosts(json);
          })
          .catch(console.error);
      }, []);

    return (
        <div>
          <Results posts={posts} url={url}/>
        </div>
    );
}

export default Home;