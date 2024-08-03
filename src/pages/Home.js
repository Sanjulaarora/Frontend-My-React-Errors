import React from 'react';
import Feed from '../components/Feed';
import FilterSideBar from '../components/FilterSideBar';
import Pagination from '../components/Pagination';
import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

const Home = () => {
  const {searchResults, fetchError, isLoading} = useContext(AppContext);

  const[currentPage, setCurrentPage] = useState(1);
  const[blogsPerPage, setBlogsPerPage] = useState(6);
  const lastBlogIndex = currentPage * blogsPerPage ;
  const firstBlogIndex = lastBlogIndex - blogsPerPage;
  const currentBlogs = searchResults.slice(firstBlogIndex, lastBlogIndex);
  
  return (
    <main id="home" className="flex flex-col items-center container p-[2px] media426:p-1 mb-10 overflow-y-auto min-h-screen"> 
      <section className="flex justify-center container mt-1 p-1">
        <div id="blogs" className="flex flex-wrap w-2/4 mr-28 media321:mr-14 media426:mr-0">
          {isLoading && <p className="font-anton text-sm media426:text-xl text-center mt-4">Loading Blogs...</p>}
          {!isLoading && fetchError && <p className="font-anton text-sm media426:text-xl text-center text-red-600 mt-4">{fetchError}</p>}
          {!isLoading && !fetchError && (searchResults.length ? 
            <div id="blog-cards" className="flex flex-wrap mr-12">
              <Feed blogs={currentBlogs} />
            </div>
            : 
            <div className="mx-auto">
              <p className="font-anton text-sm media426:text-xl text-center">No blog to display.</p>
            </div>
          )}
        </div>
        <div id="sidebar" className="absolute right-2 media321:right-3 media769:right-14 bottom-[14%] media321:bottom-[16%] media426:bottom-[6%] media769:bottom-[2%]">
          <FilterSideBar />
        </div>
      </section>
      <Pagination 
        totalBlogs={searchResults.length}
        blogsPerPage={blogsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setBlogsPerPage={setBlogsPerPage}
      />
    </main> 
  )
}

export default Home;