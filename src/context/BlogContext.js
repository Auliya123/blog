import React from "react";

export const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPost = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];

  return (
    <BlogContext.Provider value={blogPost}>{children}</BlogContext.Provider>
  );
};
