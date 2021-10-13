import React from 'react'
import '../styles/services.css';


function Services1() {
    return (
        <div>
        <section className="services-area services-border pos-rel pt-50">
            {/* <span className="h4services-bg"> */}
                <img src="" alt="" />
            {/* </span> */}
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className="section-title text-center pos-rel mb-75">
                            <div className="section-icon">
                                <img className="section-back-icon" src={require("../img/rah-assets/hospital-bg.png").default} alt="" />
                            </div>
                            <div className="section-text pos-abs">
                                <h1>Hospitals near you</h1>
                                <h5>Fetch details of all the hospitals nearby you and select the best <br/> services from a wide range of options.</h5>
                            </div>
                            <div className="section-line pos-rel">
                                <img src="img/shape/section-title-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                 <span className="row h4service-bg">
            </span> 
            </div>
        </section>
        </div>
    )
}

export default Services1
