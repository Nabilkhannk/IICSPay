import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Error = () => {
  return (
  <>
    <Navbar/>
      <div className="container error-container">
        <h1>WE ARE SORRY,PAGE NOT FOUND!</h1>
      </div>
    <Footer/>
  </>
  )
};

export default Error;
