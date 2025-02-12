import React, { useState } from "react";

export const BlogPost = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="blogPost" onClick={toggleContent}>
      <h2 className="blog-title">
        {title}
        <span className="toggle-icon">{isOpen ? "" : ""}</span>
      </h2>
      {isOpen && <p className="blog-content">{content}</p>}
    </div>
  );
};
