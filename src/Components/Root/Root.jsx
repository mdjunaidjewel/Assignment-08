import React from 'react';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
      <div className="flex flex-col">
        <Navbar></Navbar>
        <div className='flex-1 min-h-screen'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;