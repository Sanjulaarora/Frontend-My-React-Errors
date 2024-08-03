import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

const SignUp = () => {
  const[signupEmail, setSignupEmail] = useState('');
  const[signupPassword, setSignupPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const { Success, Error } = useContext(AppContext);

  const handleSignupSubmit = async(e) =>{
    e.preventDefault();
    if(signupPassword !== confirmPassword){
      Error('Passwords do not match !');
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      setSignupEmail('');
      setSignupPassword('');
      setConfirmPassword('');
      console.log(result);
      Success(`Sign Up Successful. Welcome ${result.user.email} !`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
      Error(`${err.message}`);
    }
  }

  return (
    <form id="sign-up-form" onSubmit={handleSignupSubmit} 
      className="flex flex-col justify-center items-center space-y-2 media426:space-y-3 media769:space-y-4 mt-4 mb-4 h-[280px] media426:h-[350px] media769:h-[418px] w-[260px] media426:w-80 media769:w-96 mx-auto p-2 rounded-lg shadow-2xl"
    > 
      <div className="flex flex-col p-1 media769:p-2">
        <label htmlFor="email" className="font-anton text-[#56463c] text-xs media426:text-sm media769:text-xl"> Email </label>
        <input className="w-56 media426:w-64 media769:w-80 rounded-md outline-none p-1 text-xs media426:text-base"
        id="email"
        type="text"
        placeholder="Enter Your email"
        required
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col p-1 media769:p-2">   
        <label htmlFor="password" className="font-anton text-[#56463c] text-xs media426:text-sm media769:text-xl"> Password </label>
        <input className="w-56 media426:w-64 media769:w-80 rounded-md outline-none p-1 text-xs media426:text-base"
        id="password"
        type="password"
        placeholder="Enter your password"
        required
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col p-1 media769:p-2">
        <label htmlFor="confirm-password" className="font-anton text-[#56463c] text-xs media426:text-sm media769:text-xl"> Confirm Password </label>
        <input className="w-56 media426:w-64 media769:w-80 rounded-md outline-none p-1 text-xs media426:text-base"
        id="confirm-password"
        type="password"
        placeholder="Enter Your password to confirm"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="font-anton text-[#F2E9E4] text-xs media426:text-sm media769:text-lg bg-[#56463c] rounded-md w-40 media426:w-48 media769:w-52 p-2 media769:p-1 shadow-lg hover:scale-110">SignUp</button>
      <div className="flex">
        <p className="font-anton text-[#56463c] text-xs media426:text-base">Already have an account?</p>
        <Link to='/login' className="ml-2 font-anton text-blue-800 hover:underline text-xs media426:text-base">Login</Link>
      </div>  
    </form>  
  )
}

export default SignUp;