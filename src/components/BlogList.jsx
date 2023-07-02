import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({blogs}) => {
  const blogList = blogs.map((blog) => <BlogItem key={blog.id} blog = {blog}/>)
  return (
    <ul className='max-w-md mt-10 m-auto gap-6'>
      {blogList}
    </ul>
  )
}

export default BlogList