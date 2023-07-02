import React, { useState } from "react";

const BlogForm = ({ onBlogCreation }) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const blog = {
      id: Math.random().toString(),
      title: enteredTitle,
      createdAt: new Date(),
    };
    onBlogCreation(blog);
    setEnteredTitle("");
  };
  return (
    <form
      onSubmit={submitFormHandler}
      className="max-w-md m-auto p-6 rounded-md shadow-md flex flex-col"
    >
      <h1 className="text-center text-xl text-gray-600">
        To Do List - Add a new task!
      </h1>
      <input
        type="text"
        className="mb-8 mt-7 py-1 px-1 rounded-md border border-blue-700 outline-blue-400"
        value={enteredTitle}
        onChange={(e) => setEnteredTitle(e.target.value)}
      />
      <button className="py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-900 transition outline-blue-800">
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
