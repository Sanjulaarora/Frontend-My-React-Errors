import React from 'react';
import Blog from './Blog';

const Feed = ({blogs}) => {
  return (
    <>
      {blogs.map(blog =>(
        <Blog key={blog.id} blog={blog} />
      )) }
    </>
  )
}

export default Feed;