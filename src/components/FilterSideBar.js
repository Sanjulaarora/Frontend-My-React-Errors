import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const FilterSideBar = () => {
  const { handleClick } = useContext(AppContext);
  return (
    <article className="bg-[#4A4E69] h-[250px] media321:h-[230px] media426:h-[268px] media769:h-72 w-20 media321:w-24 media426:w-44 media769:w-56 p-[6px] media769:p-2 rounded-lg shadow-lg">
      <h1 className="text-center text-[#DAD7CD] text-xs media426:text-base font-anton rounded-md mt-1 p-[2px] media769:p-1">Categories</h1>
      <form className="flex flex-col">
        <button className="bg-[#DAD7CD] font-anton text-[#22223B] text-xs media426:text-base text-center rounded-md mt-1 hover:scale-105 p-[2px] media769:p-1" onClick={handleClick} value="">All Blogs</button>   
        <button className="bg-[#DAD7CD] font-anton text-[#22223B] text-xs media426:text-base text-center rounded-md mt-2 hover:scale-105 p-[2px] media769:p-1" onClick={handleClick} value="create-react-app or vite" >Create-react-app or vite</button>
        <button className="bg-[#DAD7CD] font-anton text-[#22223B] text-xs media426:text-base text-center rounded-md mt-2 hover:scale-105 p-[2px] media769:p-1" onClick={handleClick} value="router">Router</button>
        <button className="bg-[#DAD7CD] font-anton text-[#22223B] text-xs media426:text-base text-center rounded-md mt-2 hover:scale-105 p-[2px] media769:p-1" onClick={handleClick} value="axios or rest api">Axios or Rest Api</button>
        <button className="bg-[#DAD7CD] font-anton text-[#22223B] text-xs media426:text-base text-center rounded-md mt-2 hover:scale-105 p-[2px] media769:p-1" onClick={handleClick} value="context">Context</button>
        <button className="bg-[#DAD7CD] font-anton text-[#22223B] text-xs media426:text-base text-center rounded-md mt-2 hover:scale-105 p-[2px] media769:p-1" onClick={handleClick} value="redux">Redux</button>   
      </form>
    </article>
  )
}

export default FilterSideBar;