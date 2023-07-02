import React, { useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

function App() {

  const [blogs, setBlogs] = useState([]);
  const onBlogCreation = (blog) => {
    
    setBlogs((prevState) => {
      return [...prevState, blog];
    });
  };
  return (
    <div className="p-20">
      <BlogForm onBlogCreation={onBlogCreation} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
