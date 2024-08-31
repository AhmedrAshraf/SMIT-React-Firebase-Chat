import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl md:text-3xl font-medium text-gray-600 mt-4">Oops! Page not found</p>
        <p className="text-md md:text-lg text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
