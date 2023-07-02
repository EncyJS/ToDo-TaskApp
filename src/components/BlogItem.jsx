import React from "react";
import Checkbox from "./CheckBox";

function BlogItem({blog}) {
  return (
    <li className="rounded-md shadow-md p-6">
      <h1 className="font-semibold text-grey-900">{blog.title}</h1>
      <h3 className="mb-1 text-gray-600 italic">
        Created at: <span className="text-blue-700">{blog.createdAt.toLocaleString('en-US')}</span>
      </h3>
      <p className="text-gray-600 text-sm"><Checkbox /></p>
    </li>
  );
}

export default BlogItem;
