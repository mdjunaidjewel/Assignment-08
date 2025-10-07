import React from 'react';

const Footer = () => {
    return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-indigo-400">MyBrand</h3>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} MyBrand, Inc. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-150">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-150">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-150">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-150">
              Contact
            </a>
          </div>
          
        </div>   
      </div>
    </footer>
  );
};

export default Footer;