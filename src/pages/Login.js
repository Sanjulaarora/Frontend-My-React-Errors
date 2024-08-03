import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

const Login = () => {
  const[loginEmail, setLoginEmail] = useState('');
  const[loginPassword, setLoginPassword] = useState('');
  const history = useHistory();
  const { Success, Error } = useContext(AppContext);

  const handleLoginSubmit = async (e) =>{
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(result);
      setLoginEmail('');
      setLoginPassword('');
      Success(`Login Successful. Welcome ${result.user.email} !`);
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      Error(`${err.message}`);
    }
  }
  return (
    <section id="login" className="h-[480px] media426:h-[600px]">
      <form id="login-form" onSubmit={handleLoginSubmit} 
        className="flex flex-col justify-center items-center space-y-5 mt-14 mb-10 h-[284px] media426:h-[364px] media769:h-96 w-[264px] media426:w-[364px] media769:w-96 mx-auto rounded-lg shadow-2xl">
        <div className="flex flex-col p-3">
          <label htmlFor="email" className="font-anton text-[#56463c] text-sm media426:text-lg media769:text-xl"> Email </label>
          <input className="w-56 media426:w-72 media769:w-80 rounded-md outline-none p-1 text-xs media426:text-base "
          id="email"
          type="text"
          placeholder="Enter Your email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-3">   
          <label htmlFor="password" className="font-anton text-[#56463c] text-sm media426:text-lg media769:text-xl"> Password </label>
          <input className="w-56 media426:w-72 media769:w-80 rounded-md outline-none p-1 text-sm media426:text-base"
          id="password"
          type="password"
          required
          placeholder="Enter your password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button className="font-anton text-[#F2E9E4] text-sm media426:text-lg bg-[#56463c] rounded-md w-40 media426:w-48 media769:w-52 p-2 media769:p-1 shadow-lg hover:scale-110">Login</button>
        <div className="flex">
          <p className="font-anton text-[#56463c] text-sm media426:text-base">Do not have an account?</p>
          <Link to='/about' className="ml-2 font-anton text-blue-800 hover:underline text-sm media426:text-base">SignUp</Link>
        </div>  
      </form>  
    </section>
  )
}

export default Login;