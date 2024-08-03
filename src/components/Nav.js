import React from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Nav = () => {
  const { search, setSearch } = useContext(AppContext);
  return (
    <nav className="flex justify-center items-center bg-[#313247] p-1 media426:p-2">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
          <input className="w-36 media426:w-80 p-[3px] media426:p-1 rounded-xl text-xs media426:text-base"
            id="search"
            type="search"
            placeholder="Search Post"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
        </label>
      </form>
      <div className="mt-1 font-anton text-[#DAD7CD] text-xs media321:text-sm media426:text-lg">
        <Link className="ml-2 media321:ml-4 media426:ml-8 hover:underline" to='/'>
          Home
        </Link>
        <Link className="ml-2 media321:ml-4 media426:ml-8 hover:underline" to='/blog'>
          Post Blog
        </Link>
        <Link className="ml-2 media321:ml-4 media426:ml-8 hover:underline" to='/about'>
          About
        </Link>
      </div>
    </nav>
  )
}

export default Nav;