import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main id="missing" className="overflow-y-auto container min-h-screen mt-20 text-center">
      <h2 className="font-anton text-[#856c5c] text-sm media426:text-xl mt-4">Page not Found.</h2>
      <p className="font-anton text-[#856c5c] text-sm media426:text-xl mt-4">Well, that's disappointing.</p>
      <p className="mt-4">
        <Link to='/' className="font-anton text-[black] text-xs media426:text-lg underline" > Visit Our Home.</Link>
      </p>
    </main>
  )
}

export default Missing;