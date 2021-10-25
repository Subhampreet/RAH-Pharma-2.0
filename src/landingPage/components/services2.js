import React from 'react'
import '../styles/services2.css'
function Services2() {
    return (
        <div className="service-2">
            
                
                    
                    <div className="title">
                        <div className="left">
                            <h1>Broad Range of info available at ease</h1>
                        </div>
                        <div className="right">
                            <p>All the neccessary details & features to rely upon 
                                    during critical times.<br/>All the neccessary details & 
                                    features to rely upon during critical times.<br/> All the 
                                    neccessary details.</p>
                        </div>
                    </div>

                    {/* <div class="row">
                        <div class="col-xl-5 col-lg-6 col-md-12">
                            <div class="section-title section-title-m-0 pos-rel mb-50 ">
                                <div class="section-text section-text-small pos-rel">
                                    <h1>Broad Range of info available at ease</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6 col-md-12">
                            <div class="facalty-text mb-50">
                                <p>All the neccessary details & features to rely upon 
                                during critical times. All the neccessary details & 
                                features to rely upon during critical times. All the 
                                neccessary details.</p>
                            </div>
                        </div>
                    </div> */}
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="service-box service-box-border text-center mb-30">
                                <div class="service-thumb">
                                    <img src={require("../img/rah-assets/247.png").default} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3>24*7 services</h3>
                                    <p>24hrs access to Informartion 
    service</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="service-box service-box-border text-center mb-30">
                                <div class="service-thumb">
                                    <img src={require("../img/rah-assets/verified.png").default} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3>Verified</h3>
                                    <p>100% verified information</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="service-box service-box-border text-center mb-30">
                                <div class="service-thumb">
                                    <img src={require("../img/rah-assets/blood.png").default} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3>Blood Banks</h3>
                                    <p>Check availaibility of desired 
    blood type</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="service-box service-box-border text-center mb-30">
                                <div class="service-thumb">
                                    <img src={require("../img/rah-assets/patientfriendly.png").default} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3>Patient Friendly</h3>
                                    <p>Designed to deliver optimum 
                                    medical support </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="service-box service-box-border text-center mb-30">
                                <div class="service-thumb">
                                    <img src={require("../img/rah-assets/ambulance.png").default} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3>Ambulance</h3>
                                    <p>Check for ambulance and pick 
                                    up duration</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="service-box service-box-border text-center mb-30">
                                <div class="service-thumb">
                                    <img src={require("../img/rah-assets/volunteers.png").default} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3>Volunteers</h3>
                                    <p>Easily contact a volunteer or 
                                    choose to be one</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
       
        </div>
    )
}

export default Services2
