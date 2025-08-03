import React from 'react';

const Header = () => {
  return (
    <section className="bg-cover bg-center text-white text-center py-32 mt-10 relative" style={{ backgroundImage: "url('/src/group.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 py-10">
        <h1 className="text-4xl font-bold mb-4">Join 11,000 others alread taking trades</h1>
        <p className="mb-10">Expand your trading skills and connect with like-minded individuals.</p>
        <a href='/signup' className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700">Get Started</a>
      </div>
    </section>
  );
};

export default Header;
