import React, { Suspense } from 'react';

const Blog = React.lazy(() => import('./Blog'));

const Feed = ({blogs}) => {
  return (
    <>
      {blogs.map(blog =>(
        <Suspense fallback={<div>Loading...</div>}>
          <Blog key={blog.id} blog={blog} />
        </Suspense>
      )) }
    </>
  )
}

export default Feed;