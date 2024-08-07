import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center mt-10 shadow-lg">
      <div className="mb-4">
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900">
          <i className="fa fa-dribbble"></i>
        </a>
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900">
          <i className="fa fa-facebook"></i>
        </a>
      </div>
      <p className="text-gray-600">&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
