import React from 'react';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import api from 'axios';
import AppContext from '../context/AppContext';

const NewBlog = () => {
  const[blogTitle, setBlogTitle] = useState('');
  const[blogBody, setBlogBody] = useState('');
  const[blogSolution, setBlogSolution] = useState('');
  const history = useHistory();
  const { blogs, setBlogs, blogCategory, setBlogCategory, Success, Error } = useContext(AppContext);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const id = blogs.length ? blogs[blogs.length -1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newBlog = { id, title: blogTitle, datetime, body: blogBody, solution: blogSolution , category: blogCategory };
    try {
      const response = await api.post('https://blogs-d7c1.onrender.com/blogs', newBlog);
      setBlogs([...blogs, response.data]);
      setBlogTitle('');
      setBlogBody('');
      setBlogSolution('');
      setBlogCategory('');
      history.push('/');
      Success('Blog is posted successfully!');
    } catch(err) {
      console.log(`Error: ${err.message}`);
      Error('Something went wrong !');
    }
  }

  return (
    <main id="new-blog" className="min-h-screen overflow-y-auto container py-6 media769:py-8 mt-3">
      <h1 className="font-anton text-[#56463c] text-md media426:text-2xl media769:text-3xl text-center mt-2"> Add a Blog </h1>
      <form id="new-blog" onSubmit={handleSubmit} 
      className="flex flex-col justify-center items-center space-y-3 media426:space-y-5 mt-5"
      >
        <div className="flex p-3">
          <label htmlFor="blog-title" className="font-anton text-[#56463c] text-xs media426:text-lg media769:text-xl p-1"> Title : </label>
          <input className="w-44 media426:w-72 media769:w-80 rounded-md outline-none p-1 shadow-lg font-anton text-xs media426:text-base"
            id="blog-title"
            type="text"
            placeholder="Enter Title of Your Blog"
            required
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </div> 
        <div className="flex p-3">   
          <label htmlFor="blog-body" className="font-anton text-[#56463c] text-xs media426:text-lg media769:text-xl p-1">Body : </label>
          <textarea className="w-[220px] media426:w-[500px] media769:w-[600px] h-16 media426:h-20 rounded-md outline-none p-1 shadow-lg font-anton text-xs media426:text-base"
            id="blog-body"
            type="text-area"
            placeholder="Enter the Blog"
            required
            value={blogBody}
            onChange={(e) => setBlogBody(e.target.value)}
          />
        </div>  
        <div className="flex p-3">
          <label htmlFor="blog-solution" className="font-anton text-[#56463c] text-xs media426:text-md media769:text-xl">Solution : </label>
          <textarea className="w-[216px] media321:w-[270px] media426:w-[540px] media769:w-[640px] h-40 media426:h-44 rounded-md outline-none p-1 shadow-lg font-anton text-xs media426:text-base"
            id="blog-solution"
            type="text-area"
            placeholder="Enter the solution"
            required
            value={blogSolution}
            onChange={(e) => setBlogSolution(e.target.value)}
          />
        </div>  
        <div className="p-3" >
          <label htmlFor="blog-category" className="font-anton text-[#56463c] text-xs media426:text-lg media769:text-xl">Category :</label>
          <input className="w-44 media426:w-72 media769:w-80 rounded-md outline-none p-1 shadow-lg font-anton text-xs media426:text-base"
            list="blog-category"
            type="text"
            placeholder="Enter category of the blog"
            required
            value={blogCategory}
            onChange={(e) => setBlogCategory(e.target.value)}
          /> 
          <datalist id="blog-category">
            <option className="font-anton">create-react-app or vite</option>
            <option className="font-anton">router</option>
            <option className="font-anton">axios or rest api</option>
            <option className="font-anton">context</option>
            <option className="font-anton">redux</option>
          </datalist>
        </div>
        <div className="p-3">
         <button className="font-anton text-[#F2E9E4] text-sm media426:text-xl media769:text-2xl bg-[#56463c] rounded-md w-14 media426:w-20 p-2 media769:p-1 shadow-lg hover:underline hover:scale-110" type="submit">Shoot!</button>
        </div>
      </form>
    </main>
  )
}

export default NewBlog;