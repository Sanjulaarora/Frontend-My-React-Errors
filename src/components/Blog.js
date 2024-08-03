import React from 'react';
import { FaCalendar, FaBug } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
  return (
    <article id="blog" className="flex flex-col h-52 media426:h-60 w-40 media426:w-52 media769:w-60 m-4 p-1 media698:p-3 bg-[#856d5e] rounded-lg shadow-xl hover:scale-110">
         <Link to={`/blog/${blog.id}`}>
            <h2 className="font-anton text-[#2d2e3e] text-md media426:text-xl text-center hover:scale-105 mt-[2px]">{blog.title}</h2>
            <p className="flex font-anton text-[#2d2e3e] text-xs p-[2px] media426:p-1 hover:scale-105">
               <FaCalendar className="mt-[2px]" /> 
               {blog.datetime}
            </p>
            <p className="flex font-anton1 text-[#DAD7CD] text-xs media426:text-sm text-center p-1 mt-2">
               <FaBug className="text-slate-800 text-6xl pb-9 hover:scale-110" />
               {(blog.body).length <= 180
                  ? blog.body 
                  : `${(blog.body).slice(0,180)}...`
               }
            </p>
         </Link>
    </article>
  )
}

export default Blog;