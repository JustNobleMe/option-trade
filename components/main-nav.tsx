import React from 'react';

const MainNav = () => {
  return (
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 drop-shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="/" className="text-xl font-bold">Trade<span className="text-purple-900">Pro</span></a>
          <ul className="flex space-x-6">
              <li><a href="/#about" className="text-gray-700 hover:text-purple-900">Community</a></li>
              <li><a href="/#trade" className="text-gray-700 hover:text-purple-900">Trades</a></li>
              <li><a href="/#profile" className="text-gray-700 hover:text-purple-900">Partners</a></li>
          </ul>
          <a href='/signup' className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700">Get Started</a>
        </div>
      </nav>
  );
};

export default MainNav;
