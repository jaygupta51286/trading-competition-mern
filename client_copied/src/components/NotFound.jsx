// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-purple-600 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <a
            className="relative inline-block text-sm font-medium text-purple-600 group active:text-purple-500 focus:outline-none focus:ring"
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-600 group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className="relative block px-8 py-3 bg-gray-900 border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
