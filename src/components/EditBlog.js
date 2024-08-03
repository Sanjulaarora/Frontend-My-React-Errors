import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import api from 'axios';
import AppContext from '../context/AppContext';

const EditBlog = () => {
  const[editTitle, setEditTitle] =useState('');
  const[editBody, setEditBody]= useState('');
  const[editSolution, setEditSolution] = useState('');
  const[editCategory, setEditCategory] = useState('');  
  const {blogs, setBlogs, Success, Error } = useContext(AppContext);  
  const history = useHistory();

  const handleEdit = async(id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedBlog = { id, title: editTitle, datetime,body: editBody, solution: editSolution, category: editCategory };
    try {
      const response = await api.put(`https://blogs-d7c1.onrender.com/blogs/${id}`, updatedBlog);
      setBlogs(blogs.map(blog => blog.id === id ? {...response.data} : blog));
      setEditTitle('');
      setEditBody('');
      setEditSolution('');
      setEditCategory('');
      history.push('/');
      Success('Blog is edited successfully !');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      Error('Something went wrong !');
    }
  }

  const { id } = useParams();
  const blog = blogs.find(blog => (blog.id).toString() === id)  

  useEffect(() => {
    if(blog){
        setEditTitle(blog.title);
        setEditBody(blog.body);
        setEditSolution(blog.solution);
        setEditCategory(blog.category);
    }
  },[blog, setEditTitle, setEditBody, setEditSolution, setEditCategory]);

  return (
    <main id="edit-blog" className="min-h-screen overflow-y-auto container py-6 media769:py-8 mt-3">
        {editTitle && 
            <>
                <h1 className="font-anton text-[#56463c] text-md media426:text-2xl media769:text-3xl text-center"> Edit Blog </h1>
                <form id="editBlogForm" onSubmit={(e) => e.preventDefault()} 
                className="flex flex-col justify-center items-center space-y-3 media426:space-y-5 mt-5"
                >
                    <div className="flex p-3">
                    <label htmlFor="edit-title" className="font-anton text-[#56463c] text-xs media426:text-lg media769:text-xl"> Title: </label>
                        <input className="w-44 media426:w-72 media769:w-80 rounded-md outline-none shadow-lg p-1 font-anton text-xs media426:text-base"
                        id="edit-title"
                        type="text"
                        placeholder="Enter Title of Your Blog"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex p-3">   
                    <label htmlFor="edit-body" className="font-anton text-[#56463c] text-xs media426:text-lg media769:text-xl"> Body: </label>
                        <textarea className="w-[220px] media426:w-[500px] media769:w-[600px] h-16 media426:h-20 rounded-md outline-none shadow-lg p-1 font-anton text-xs media426:text-base"
                        id="edit-body"
                        type="text-area"
                        placeholder="Enter the Blog"
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                        />
                    </div>  
                    <div className="flex p-3">
                        <label htmlFor="edit-solution" className="font-anton text-[#56463c] text-xs media426:text-md media769:text-xl"> Solution: </label>
                        <textarea className="w-[216px] media321:w-[270px] media426:w-[540px] md:w-[640px] h-40 media426:h-44 rounded-md outline-none shadow-lg p-1 font-anton text-xs media426:text-base"
                        id="edit-solution"
                        type="text-area"
                        placeholder="Enter the solution"
                        value={editSolution}
                        onChange={(e) => setEditSolution(e.target.value)}
                        />
                    </div>
                    <div className="p-3">
                        <label htmlFor="blog-category" className="font-anton text-[#56463c] text-xs media426:text-lg media769:text-xl">Category:</label>
                        <input className="w-44 media426:w-72 media769:w-80 rounded-md outline-none p-1 shadow-lg font-anton text-xs media426:text-base"
                            list="edit-category"
                            type="text"
                            placeholder="Enter category of the blog"
                            value={editCategory}
                            onChange={(e) => setEditCategory(e.target.value)}
                        /> 
                        <datalist id="edit-category">
                            <option>create-react-app or vite</option>
                            <option>router</option>
                            <option>axios or rest api</option>
                            <option>context</option>
                            <option>redux</option>
                        </datalist>
                    </div>
                    <div className="p-3">
                    <button className="font-anton text-[#F2E9E4] text-sm media426:text-xl media769:text-2xl bg-[#56463c] rounded-md w-14 media426:w-18 media769:w-20 p-2 media769:p-1 shadow-lg hover:underline hover:scale-110" type="submit" onClick={() =>handleEdit(blog.id)}>Edit!</button>
                    </div>
                </form>
            </>
        }
        {!editTitle &&
            <>
               <h2 className="font-anton text-[#856c5c] text-xl mt-4">Blog not Found.</h2>
               <p className="font-anton text-[#856c5c] text-xl mt-4">Well, that's disappointing.</p>
               <p>
                  <Link to='/' className="font-anton text-[black] text-lg mt-4 hover:underline"> Visit Our Home.</Link>
               </p>
            </>      
        }         
    </main>
  )
}

export default EditBlog;