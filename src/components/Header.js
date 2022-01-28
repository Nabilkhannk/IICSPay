import React from 'react';

const Header = () => {
  return(
      <>
      <header>
        <section className='container main-hero-container'>
            <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last ">
                    <h1>Online Payment Made<br/> Easy For You.</h1>
                    <p className='main-hero-para'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quo voluptatem error obcaecati adipisci facere nobis autem
                        ad harum expedita, nisi sit nam aliquid totam accusantium.
                    </p>
                    <h5>Get early access for you</h5>
                    <div className="input-group mt-3">
                        <input type="text" className='rounded-pill w-75 me-3 form-control-text' placeholder='Enter Your Email'/>
                        <div className="input-group-button">Get it now</div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 header-right-side
                  d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                     <img src="./images/header-img.jpg" alt="hero-img" className='image-fluid'/>
                     <img src="./images/header-img2.jpg" alt="hero-img" className='image-fluid main-hero-img2'/>
                 </div>
            </div>
        </section>
      </header>
      </>
  )
};

export default Header;
