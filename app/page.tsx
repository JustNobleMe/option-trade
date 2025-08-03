import React from 'react';
import '../app/globals.css';
import Header from '../components/landing/header';
import Features from '../components/landing/features';
import About from '../components/landing/about';
import Profile from '../components/landing/profile';
import Footer from '../components/landing/footer';

const HomePage = () => {
  return (
    <main>


      <Header />
      <Features />
      <About />
      <Profile />
      <Footer />
    </main>
  );
};

export default HomePage;
