import React from "react";

// Local Imports
import { BlogPost } from "./BlogPost.jsx";

export const BlogList = ({ posts }) => {
  return (
    <>
      <div className="blog-list">
        {posts.map((post, index) => (
          <BlogPost key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </>
  );
};
