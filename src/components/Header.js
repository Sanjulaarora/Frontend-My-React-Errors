import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { FaMoon, FaSun } from 'react-icons/fa6';


const Header = () => {
  const { user, Success, theme, toggleTheme } = useContext(AppContext);

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    Success('Logout successfull !');
  };

  return (
    <header className="p-2 media426:p-4 h-20 flex justify-between items-center" >
      <div className="hover:scale-110">
        <Link to='/'>
          <h1 className="ml-10 font-anton head text-md media321:text-lg media426:text-2xl">My React</h1>
          <h2 className="ml-10 font-anton head text-sm media321:text-md media426:text-xl">Errors</h2>
        </Link>
      </div>
      <div className="flex">
        <div id="mode-switch" className="mr-3 media426:mr-8">
          { theme === "dark" &&
            < FaSun role="button" className="w-8 media426:w-10 h-4 media426:h-6 mt-2 head rounded-md hover:scale-110" onClick={toggleTheme}/>
          }
          { theme === "light" &&
            < FaMoon role="button" className="w-8 media426:w-10 h-4 media426:h-6 mt-2 head rounded-md hover:scale-110" onClick={toggleTheme}  />
          }
        </div>
        <div id="login/signup">
          { !user &&
            <Link to='/login'><button className="w-16 media426:w-20 h-8 media426:h-10 mr-8 media426:mr-16 bg-[#DAD7CD] font-anton font-medium text-[#22223B] rounded-md hover:scale-110">Login</button></Link>
          }
          { user &&
            <button className="w-16 media426:w-20 h-8 media426:h-10 mr-3 media426:mr-8 bg-[#DAD7CD] font-anton font-medium text-[#22223B] rounded-md hover:scale-110" onClick={handleLogout}>Logout</button>
          }
        </div>
      </div>
    </header>
  )
}

export default Header;