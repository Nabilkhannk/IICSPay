import React, { useState } from 'react';
import serviceapi from './Api/serviceApi';

const Services = () => {

    const [serviceData, setServiceData] = useState(serviceapi);

  return(
      <>
      <section className='service-main-container'>
        <div className="container service-container">
            <h4 className='main-heading text-center fw-bold'>How to send money</h4>
            <div className="row service-row">

                {
                    serviceData.map((curVal)=>{
                        const {id,logo,title,info} = curVal;
                        return(
                            <>
                            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv2">
                            <i className={`fontawesome-style ${logo}`}></i>
                            <h2 className='sub-heading'>{title}</h2>
                            <p className='main-hero-para'>{info}</p>
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

export default Services;
