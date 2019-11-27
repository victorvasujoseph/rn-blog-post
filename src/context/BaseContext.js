import React, { useState } from "react";

const BaseContext = React.createContext();

export const BlogProvider = ({ children }) => {
 
  const [blogPosts, setBlogPost] = useState([]);

  const addBlogPost = () => {
    setBlogPost([...blogPosts, { id: Math.floor(Math.random() * 9999) , title: `Blog Posts #${blogPosts.length + 1}` }]);
  } 
  return (
    <BaseContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContext;
