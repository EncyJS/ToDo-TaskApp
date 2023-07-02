import React, { useState } from "react";

const BlogForm = ({ onBlogCreation }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const blog = {
      id: Math.random().toString(),
      title: enteredTitle,
      description: enteredDescription,
      createdAt: new Date(),
    };
    onBlogCreation(blog);
    setEnteredTitle('');
    setEnteredDescription('');
  };
  return (
    <form
      onSubmit={submitFormHandler}
      className="max-w-md m-auto p-6 rounded-md shadow-md flex flex-col"
    >
      <h1 className="text-center text-xl text-gray-600">Add New Blog</h1>
      <label className="text-grey-600 mb-1">Title</label>
      <input
        type="text"
        className="py-1 px-1 mb-4 rounded-md border border-blue-700 outline-blue-400"
        value = {enteredTitle}
        onChange={(e) => setEnteredTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea
        onChange={(e) => setEnteredDescription(e.target.value)}
        value={enteredDescription}
        className="py-1 px-1 mb-4 h-40 rounded-md border border-blue-700 outline-blue-400"
      ></textarea>
      <button className="mt-6 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-900 transition outline-blue-800">
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
