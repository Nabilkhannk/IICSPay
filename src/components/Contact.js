import React from 'react';

const Contact = () => {
  return(
      <>
      <section className='contactus-section'>
          <div className="container">
              <div className="row">
                  <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="contact-leftside col-12 col-lg-5">
                            <h4 className='main-heading fw-bold'>Contact With Our<br/> Sales Team.</h4>
                            <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                               Aspernatur error exercitationem nam.</p>
                               <figure>
                                   <img src="./images/contact-img.jpg" alt="contactImg" className='img-fluid' />
                               </figure>
                        </div>
                        <div className='contact-rightside col-12 col-lg-7'>
                            <form method='POST'>
                                <div className="row">
                                    <div className="col-12 col-lg-6 contact-input-feild">
                                        <input type="text" className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-feild">
                                        <input type="text" className='form-control' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6 contact-input-feild">
                                        <input type="text" className='form-control' placeholder='Phone Number' />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-feild">
                                        <input type="text" className='form-control' placeholder='Email Id' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 contact-input-feild">
                                        <input type="text" className='form-control' placeholder='Add Address' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="text" className='form-control' placeholder='Enter Your Message' />
                                    </div>
                                </div>
                                <div class="form-check form-checkbox-style">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                    <label class="form-check-label" className='main-hero-para'>
                                        I agree that the IICSpay may contact me at email address or phone number above 
                                    </label>
                                        </div>

                                <button type='submit' className='btn btn1-style w-100'>Submit</button>
                            </form>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
      </>
  )
};

export default Contact;
