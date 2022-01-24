import React from "react";
import PostCard from "./PostCard";

function Results({ posts }) {
  return (
      <section className="cardList">
        {posts.map((post) => (
          <div>
            <PostCard post={post} />
          </div>
        ))}
      </section>
  );
}

export default Results;
