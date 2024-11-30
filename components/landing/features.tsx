import React from 'react';

const Features = () => {
  return (
    <section className="py-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Key Features</h2>
      <div className="flex justify-center space-x-16">
        <div className='flex flex-col justify-center items-center space-y-1'>
          <i className='fa-solid fa-lock text-2xl text-purple-900'></i>
          <p>Secure Transactions</p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-1'>
          <i className='fa-solid fa-clock text-2xl text-purple-900'></i>
          <p>Real-time Updates</p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-1'>
          <i className='fa-solid fa-user text-2xl text-purple-900'></i>
          <p>User-friendly Interface</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
