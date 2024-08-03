import React from 'react';
import { useState,useContext } from 'react';
import AppContext from '../context/AppContext';

const Comments = () => {
  const[userName, setUserName] = useState('');
  const[userComment, setUserComment] = useState('');
  const { Success } = useContext(AppContext);

  const handleSubmitComments = (e) => {
    e.preventDefault();
      setUserName('');
      setUserComment('');
      Success('Comment Added Successfully!');     
  };

  return (
    <form id="comment-form" className="flex flex-col justify-center items-center space-y-1 media426:space-y-2 media769:space-y-4 mt-2 mb-3 h-60 media426:h-80 media769:h-96 w-60 media426:w-80 md:w-96 mx-auto p-2 rounded-lg shadow-2xl" onSubmit={handleSubmitComments}>
      <div className="flex flex-col p-2">
        <label htmlFor="name" className="font-anton text-[#56463c] text-xs media426:text-xl"> Name </label>
        <input className="w-52 media426:w-80 rounded-md outline-none p-1 text-xs media426:text-base"
        id="name"
        type="text"
        placeholder="Enter Your name"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col p-2">   
        <label htmlFor="comment" className="font-anton text-[#56463c] text-xs media426:text-xl"> Comment </label>
        <textarea className="w-52 media426:w-80 h-14 media426:h-20 rounded-md outline-none p-1 text-xs media426:text-base"
        id="comment"
        type="text-area"
        placeholder="Add your comment!"
        required
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        />
      </div>    
      <div className="p-3">
        <button className="font-anton text-[#F2E9E4] text-sm media426:text-2xl bg-[#56463c] rounded-md w-14 media426:w-20 p-1 shadow-lg hover:underline hover:scale-110" type="submit">Shoot!</button>
      </div>
    </form>
  )
}

export default Comments;