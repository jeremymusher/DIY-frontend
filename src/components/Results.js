import React from "react";
import PostCard from "./PostCard";

function Results({ posts }) {
  return (
    <div>
      <section>
        {posts.map((post) => (
          <div>
            <PostCard post={post} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Results;
