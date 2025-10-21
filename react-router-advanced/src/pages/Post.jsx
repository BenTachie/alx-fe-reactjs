import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blog Post #{postId}</h1>
      <p>This is dynamic content for post ID: {postId}</p>
    </div>
  );
};

export default Post;
