import React from 'react'
import '../styles/services.css';

function Services3() {
    return (
        <div>
        <section className="services-area services-border pos-rel pt-185 pb-160">
            <span className="h4services-bg">
                <img src="" alt="" />
            </span>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="section-title text-center pos-rel mb-75">
                            <div className="section-text pos-rel">
                                <h1>Best Rated Hospitals</h1>
                                <h5>Know all the top ranking hospitals in your state with detailed overview 
                                and patients reviews, at a glance.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row h4service-active">
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/sumhospital.png").default} alt=""  />
                                <a className="h4services-tag blue-bg white-color text-uppercase f-700" href="#">surgery</a>
                            </div>
                            <div className="service-content h4services-content">
                            <h3 className="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/location.png").default} alt=""/>
                                <p className="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/bed.png").default} alt=""/>
                                <p className="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/call.png").default} alt=""/>
                                <p className="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                <a className="service-link" href="services-details.html">Explore <img src= {require("../img/rah-assets/arrow-down.png").default} alt=""/> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src= {require("../img/rah-assets/sumhospital.png").default} alt=""/>
                                <a className="h4services-tag blue-bg white-color text-uppercase f-700" href="#">dental</a>
                            </div>
                            <div className="service-content h4services-content">
                            <h3 className="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/location.png").default} alt=""/>
                                <p className="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/bed.png").default} alt=""/>
                                <p className="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/call.png").default} alt=""/>
                                <p className="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                <a className="service-link" href="services-details.html">Explore  <img src= {require("../img/rah-assets/arrow-down.png").default} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/sumhospital.png").default} alt="" />
                                <a className="h4services-tag blue-bg white-color text-uppercase f-700" href="#">neurology</a>
                            </div>
                            <div className="service-content h4services-content">
                               <h3 className="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/location.png").default} alt=""/>
                                <p className="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/bed.png").default} alt=""/>
                                <p className="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/call.png").default} alt=""/>
                                <p className="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                <a className="service-link" href="services-details.html">Explore  <img src= {require("../img/rah-assets/arrow-down.png").default} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/home4/services/h4__services__thumb3.png").default} alt="" />
                                <a className="h4services-tag blue-bg white-color text-uppercase f-700" href="#">neurology</a>
                            </div>
                            <div className="service-content h4services-content">
                                <h3 className="f-700"><a href="#">Sum Hospital</a></h3>
                                <p className="mb-20 f-600">4 kms away</p>
                                <p className="mb-20 f-600">400 Hospital Beds</p>
                                <p className="mb-20 f-600">+91 9000000000</p>
                                <a className="service-link" href="services-details.html">Explore  <img src= {require("../img/rah-assets/arrow-down.png").default} alt=""/></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Services3
