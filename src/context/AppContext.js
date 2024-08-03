import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AppContext = createContext({}); 

export const AppProvider = ({ children }) => {
  const[blogs, setBlogs] = useState([]);
  const[search, setSearch] = useState('');
  const[blogCategory, setBlogCategory] = useState('');
  const[searchResults, setSearchResults] = useState([]);
  const[user, setUser] = useState(null);
  const[isDarkMode, setIsDarkMode] = useState(false);
  const { data, fetchError, isLoading } = useAxiosFetch('https://blogs-d7c1.onrender.com/blogs');

  //Theme Toggler
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  //Setting the themes
  const theme = isDarkMode ? "dark" : "light";
  useEffect(() =>{
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  //Setting blogs to data fetched
  useEffect(() => {
    setBlogs(data);
  }, [data])

  //Auth State Change
  useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      if(user) setUser(user);
      else setUser(null);
    });
  }, []);

  //Search and Blog Category Filter
  useEffect(() => {
    const filteredResults = blogs.filter(blog =>((blog.title).toLowerCase()).includes(search.toLowerCase())
    || ((blog.body).toLowerCase()).includes(search.toLowerCase()) || ((blog.solution).toLowerCase()).includes(search.toLowerCase()));
    
    const filteredCategory = blogs.filter( blog => (blog.category) === blogCategory);

    if(search) {
    setSearchResults(filteredResults.reverse());
    } else 
    if(blogCategory) {
    setSearchResults(filteredCategory.reverse());
    } else {
    setSearchResults(filteredResults.reverse());
    }  
  },[blogs, search, blogCategory]);

  //Handling Category Button Click
  const handleClick =(e) =>{
    e.preventDefault();
    setBlogCategory(e.target.value);
  }

  //Toast Notify Success
  let Success = (str) => {
    toast.success(str,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }

  //Toast Notify Error  
  let Error = (str) => {
    toast.error(str,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }

  return (
    <AppContext.Provider value={{
        theme, toggleTheme, search, setSearch, blogs, setBlogs, searchResults, handleClick, blogCategory, fetchError, isLoading,  setBlogCategory, user, Success, Error
      }}>
      {children}
    </AppContext.Provider>
  )
  }

export default AppContext;