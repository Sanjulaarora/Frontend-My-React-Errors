import React from 'react';
import SignUp from '../components/SignUp';
import Comments from '../components/Comments';
import LinkedIn from '../images/icons8-linkedin-100.png';
import GitHub from '../images/icons8-github-100.png';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const About = () => {
  const { user } = useContext(AppContext);

  return (
    <main id="about" className="flex flex-col space-y-8 items-center min-h-screen overflow-y-auto container">
      <p className="font-pacifico text-lg media426:text-3xl media769:text-4xl text-gray-500 mt-4 media769:mt-5">Hi, this is Sanjula Arora.</p>
      <p className="font-anton text-[#56463c] text-center text-xs media426:text-sm media769:text-lg mx-auto">This web app serves as a platform for documenting the errors I encountered during my development journey and offering the solutions that helped me overcome those errors.</p>
      <section id="contact" className="flex flex-col media426:flex-row mt-10"> 
        <div id="signup or comment">
          {!user &&
           <>
             <p className="font-pacifico text-gray-500 text-sm media426:text-xl media769:text-2xl text-center mt-2">You can SignUp & place a comment!</p>
             <SignUp />
            </>  
          }
          {user &&
            <>
              <p className="font-pacifico text-gray-500 text-sm media426:text-xl media769:text-2xl text-center">Add a Comment!</p>
              <Comments />
            </> 
          }
        </div>
        <p className="font-pacifico text-xl media426:text-2xl media769:text-3xl text-gray-500 mt-12 media426:mt-60 ml-28 media426:ml-14 media769:ml-24">or</p>
        <div id="contact via" className="flex flex-col justify-center items-center space-y-4 mt-8 media426:mt-24 ml-[72px] media426:ml-[88px] media769:ml-32 h-48 media426:h-56 media769:h-72 w-28 media426:w-32 media769:w-48 rounded-xl shadow-2xl" >
          <p className="font-anton text-[#56463c] text-xs media426:text-sm media769:text-lg"> We can connect via </p>
          <a href="https://www.linkedin.com/in/sanjula-arora-30927b244"><img className="bg-[#56463c] h-12 media426:h-16 media769:h-20 w-12 media426:w-16 media769:w-20 rounded-md hover:scale-110" src={LinkedIn} alt="linkedin" /></a>
          <a href="https://github.com/Sanjulaarora"><img className="bg-[#56463c] h-12 media426:h-16 media769:h-20 w-12 media426:w-16 media769:w-20 rounded-md hover:scale-110" src={GitHub} alt="github" /></a>
        </div>
      </section>   
    </main>
  )
}

export default About;