import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Pagination = ({totalBlogs, blogsPerPage, setCurrentPage, currentPage}) => {
  const { search, blogCategory, isLoading, fetchError } = useContext(AppContext);
  let pages =[];

  for(let i = 1; i<= Math.ceil(totalBlogs/blogsPerPage) ; i++){
    pages.push(i);
  }
  return (
    <>
      {!isLoading && !fetchError && !search && !blogCategory && totalBlogs>blogsPerPage &&
        <section id="pagination" className="flex justify-center container">
          {pages.map((page, index) => {
            return <button className={page === currentPage ? "active" : "not-active"} key ={index} onClick={() => setCurrentPage(page)}>{page}</button>
          })} 
        </section>
      }  
    </>
  )
}

export default Pagination;