import React, { useState } from 'react';
import workapi from './Api/WorkApi';

const HowItWorks = () => {

    const [workData,setWorkData] = useState(workapi);

  return(
      <>
      <section>
          <div className="work-container container">
              <h1 className='main-heading text-center'>How does it work</h1>
                <div className="row">

                    {
                        workData.map((curVal)=>{
                            return(
                                <>
                                 <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                 <i className={`fontawesome-style ${curVal.logo}`}></i>
                                 <h2 className='sub-heading'>{curVal.title}</h2>
                                 <p className='main-hero-para w-100'>{curVal.info}</p>
                                 </div>
                                </>
                            )
                        })
                    }

                   
                </div>
          </div>
      </section>
      </>
  )
};

export default HowItWorks;
