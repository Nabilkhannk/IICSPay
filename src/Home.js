import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <HowItWorks/>
    <Aboutus/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Home;
