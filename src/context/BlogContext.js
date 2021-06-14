import React from "react";

export const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={10}>{children}</BlogContext.Provider>;
};
