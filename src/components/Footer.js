import React from 'react';

const Footer = () => {
  return (
      <>
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-12 col-lg-10 mx-auto">
                      <div className="row">
                          <div className="col-6 col-lg-3">
                              <h4>Company</h4>
                              <ul>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                              </ul>
                          </div>
                          <div className="col-6 col-lg-3">
                              <h4>Support</h4>
                              <ul>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                              </ul>
                          </div>
                          <div className="col-6 col-lg-3">
                              <h4>Services</h4>
                              <ul>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">About</a></li>
                              </ul>
                          </div>
                          <div className="col-6 col-lg-3">
                              <h4>Follow Us</h4>
                              <div className="row font_mar">
                                  <div className="col-3">
                                      <a href="#"><i className='fab fa-facebook-f fontawesome-style'></i></a>
                                  </div>
                                  <div className="col-3 mx-auto">
                                      <a href="#"><i className='fab fa-instagram fontawesome-style'></i></a>
                                  </div>
                                  <div className="col-3 mx-auto">
                                      <a href="#"><i className='fab fa-youtube fontawesome-style'></i></a>
                                  </div>
                                  <div className="col-3 mx-auto">
                                      <a href="#"><i className='fab fa-twitter fontawesome-style'></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                            <hr />
                            <div className="mt-5">
                                <p className='main-hero-para text-center w-100'>Copyright @ 2022 IICSPay. All rights reserved.</p>
                            </div>
                  </div>
              </div>
          </div>
      </footer>
      </>
  )
};

export default Footer;
