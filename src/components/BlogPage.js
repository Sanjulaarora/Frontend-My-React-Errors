import React from 'react';
import { FaCalendar, FaBug } from 'react-icons/fa6';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import api from 'axios';
import AppContext from '../context/AppContext';

const BlogPage = () => {
  const {blogs, setBlogs, Success, Error} = useContext(AppContext);
  const history = useHistory();

  const handleDelete = async(id) =>{
    if (window.confirm("Are You sure you want to delete the blog ?")){
    try{
      await api.delete(`https://blogs-d7c1.onrender.com/blogs/${id}`);
      const blogList = blogs.filter(blog => blog.id !== id);
      setBlogs(blogList);
      history.push('/');
      Success('Blog is deleted successfully !');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      Error('Something went wrong !');
      }
    }
  }

  const { id } = useParams();
  const blog = blogs.find(blog => (blog.id).toString() === id);
  
  return (
    <main id="blog-page" className="flex flex-col overflow-y-auto container min-h-screen py-6">
      <article id="blog" className="p-1">
        {blog &&
          <>
           <h2 className="font-anton text-[#56463c] text-md media426:text-2xl media769:text-3xl text-center p-[2px] media426:p-2 media769:p-1 shadow-md rounded-md w-40 media426:w-56 media769:w-60 h-7 media426:h-10 media769:h-12 mx-auto">{ blog.title }</h2>
           <p className="flex font-anton text-[#56463c] p-2 media769:p-1 text-xs media426:text-base"><FaCalendar className="mt-1" /> { blog.datetime }</p>
           <div id="problem & solution" className="h-[480px] media426:h-[450px] lg:h-[400px] shadow-xl p-1">
              <p className="flex font-anton text-xs media426:text-lg media769:text-xl text-slate-700 text-center m-2 lg:m-4"><FaBug className="text-3xl" /> { blog.body }</p>
              <p className="flex font-anton text-xs media426:text-sm media769:text-lg text-slate-600 text-center m-2 lg:m-4">{ blog.solution }</p>
           </div>
           <div id="option-buttons" className="flex justify-between mt-20">
              <Link to={`/edit/${blog.id}`}><button className="font-anton text-[#F2E9E4] text-xs media426:text-lg media769:text-xl bg-[#56463c] rounded-md h-9 media426:h-20 w-[74px] media426:w-16 media769:w-32 p-1 media426:p-2 media769:p-1 shadow-md hover:underline hover:scale-110">Edit Blog!</button></Link>
              <button className="font-anton text-[#F2E9E4] text-xs media426:text-lg media769:text-xl bg-[#56463c] rounded-md h-9 media426:h-20 w-[74px] media426:w-16 media769:w-32 p-2 media769:p-1 shadow-md hover:underline hover:scale-110" onClick={() => handleDelete(blog.id)}>Delete Blog!</button>
           </div>
          </>
        }
        {!blog &&
          <>
            <h2 className="font-anton text-[#856c5c] text-sm media426:text-lg media769:text-xl mt-4">Blog not found.</h2>
            <p className="font-anton text-[#856c5c] text-sm media426:text-lg media769:text-xl mt-4">Well, that's disappointing.</p>
            <p>
              <Link to='/' className="font-anton text-[black] text-xs media426:text-sm media769:text-lg mt-4 hover:underline">Visit My Homepage.</Link>
            </p>
          </>
        }
      </article>
    </main>
  )
}

export default BlogPage;