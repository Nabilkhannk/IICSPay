import React, { useState } from 'react';
import howToUse from './Api/howToUse';

const Aboutus = () => {

    const [aboutData, setAboutData] = useState(howToUse)
    
  return(
      <>
      <section className='common-section our-services'>
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src="./images/about-img.jpg" alt="aboutusing" />
                </div>
                <div className="col-12 col-lg-7 our-services-list">
                    <h3 className='mini-title'>
                        -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                    </h3>
                    <h1 className='main-heading m-h'>How to use the App?</h1>

                    {
                        aboutData.map((curVal)=>{
                            const{id, title, info} = curVal;
                            return(
                                <>
                                <div className="row our-services-info">
                                <div className='col-2 our-services-number'>1</div>
                                <div className='col-10 our-services-data'>
                                <h2>{title}</h2>
                                <p className='main-hero-para'>{info}</p>
                                </div>
                                </div>              
                                </>
                            )
                        })
                    } 
                    <br/>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
      </section>

        {/* second part of about us  */}

        <section className='common-section our-services our-services-rightside'>
        <div className="container mb-5">
            <div className="row">
                
                <div className="col-12 col-lg-7 our-services-rightside-content 
                d-flex justify-content-center align-items-start flex-column">
                    <h3 className='mini-title title'>
                        -- SUPPORT IN ANY LANGUAGES
                    </h3>
                    <h1 className='main-heading m-h2'>World class support is<br/> available 24/7</h1>

                    {
                        aboutData.map((curVal)=>{
                            const{id, title, info} = curVal;
                            return(
                                <>
                                <div className="row our-services-info">
                                <div className='col-2 our-services-number'>{id}</div>
                                <div className='col-10 our-services-data'>
                                <h2>{title}</h2>
                                <p className='main-hero-para'>{info}</p>
                                </div>
                                </div>              
                                </>
                            )
                        })
                    } 
                    <br/>
                    <button>Learn more</button>
                </div>
                <div className="col-12 col-lg-5 our-service-rightside-img">
                    <img src="./images/support.jpg" alt="aboutusing" />
                </div>
            </div>
        </div>
      </section>


      </>
  );
};

export default Aboutus;
