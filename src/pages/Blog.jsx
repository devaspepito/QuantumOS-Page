// React Imports
import React from "react";

// Local Imports
import { BlogList } from "./BlogList.jsx";

// Style Imports
import "../styles/Blog.css";

export const Blog = () => {
  const posts = [
    { title: "First Post", content: "This is the content of the first post." },
    { title: "Second Post", content: "Here is the second post content." },
    { title: "Third Post", content: "Another great post about blogging!" },
  ];

  return (
    <>
      <main className="AllContent">
        <div className="blogContent">
          <BlogList posts={posts} />
        </div>
      </main>
    </>
  );
};
