import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-10 text-center" id='about'>
        <h2 className="text-3xl font-bold mb-8">About us</h2>
        <p className="max-w-2xl mx-auto mb-8">TradePro is a leading platform dedicated to empowering businesses by providing cutting-edge trading solutions and insights. Our team of experts is committed to fostering growth and innovation in the trading industry.</p>
        <Image src="/src/group2.jpg" alt="Team" width={800} height={400} className="mx-auto" />
    </section>
  );
};

export default About;
