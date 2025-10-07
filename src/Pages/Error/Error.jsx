import React from 'react';
import error from '../../assets/error-404.png'
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
      <div className='flex justify-center items-center flex-col p-7 gap-5'>
        <div>
          <img src={error} alt="" />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Oops, page not found!</h1>
          <p className='text-gray-500'>The page you are looking for is not available.</p>
        </div>
        <div>
          <button className="rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] py-2 px-5 text-white font-semibold">
            <NavLink to="/">Go Back</NavLink>
          </button>
        </div>
      </div>
    );
};

export default Error;