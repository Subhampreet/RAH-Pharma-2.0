import React from 'react'
import '../styles/services.css';

function Services3() {
    return (
        <div>
        <section class="services-area services-border pos-rel pt-185 pb-160">
            <span class="h4services-bg">
                <img src="" alt="" />
            </span>
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div class="section-title text-center pos-rel mb-75">
                            <div class="section-icon">
                                <img class="section-back-icon" src={require("../img/section/section-back-icon.png").default} alt="" />
                            </div>
                            <div class="section-text pos-rel">
                                <h5>Departments</h5>
                                <h1>Managed Your <br/> Heathcare Services</h1>
                            </div>
                            <div class="section-line pos-rel">
                                <img src="img/shape/section-title-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row h4service-active">
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/sumhospital.png").default} alt=""  />
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">surgery</a>
                            </div>
                            <div class="service-content h4services-content">
                            <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/location.png").default} alt=""/>
                                <p class="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/bed.png").default} alt=""/>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/call.png").default} alt=""/>
                                <p class="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                <a class="service-link" href="services-details.html">Explore <img src= {require("../img/rah-assets/arrow-down.png").default} alt=""/> </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb service1 pos-rel mb-0">
                                <img src= {require("../img/rah-assets/sumhospital.png").default} alt=""/>
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">dental</a>
                            </div>
                            <div class="service-content h4services-content">
                            <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/location.png").default} alt=""/>
                                <p class="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/bed.png").default} alt=""/>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/call.png").default} alt=""/>
                                <p class="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                <a class="service-link" href="services-details.html">Explore <i class="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/sumhospital.png").default} alt="" />
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">neurology</a>
                            </div>
                            <div class="service-content h4services-content">
                               <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/location.png").default} alt=""/>
                                <p class="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/bed.png").default} alt=""/>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/call.png").default} alt=""/>
                                <p class="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                <a class="service-link" href="services-details.html">Explore <i class="fal fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="h4service-box white-bg mb-30">
                            <div class="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/home4/services/h4__services__thumb3.png").default} alt="" />
                                <a class="h4services-tag blue-bg white-color text-uppercase f-700" href="#">neurology</a>
                            </div>
                            <div class="service-content h4services-content">
                                <h3 class="f-700"><a href="#">Sum Hospital</a></h3>
                                <p class="mb-20 f-600">4 kms away</p>
                                <p class="mb-20 f-600">400 Hospital Beds</p>
                                <p class="mb-20 f-600">+91 9000000000</p>
                                <a class="service-link" href="services-details.html">Explore <i class="fal fa-long-arrow-right"></i></a>
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
