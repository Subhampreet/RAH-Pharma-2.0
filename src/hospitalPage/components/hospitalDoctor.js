import React from 'react'
import '../styles/hospitalDoctor.css'
function HospitalDoctor() {
    return (
        <div className="hosdoc-cont">
            
              <div className="hosdoc-body">
              <div className="hosdoc-header">
              <div>
                        <span className="hosdoc-title">Doctor</span>
                        </div>
                        <div>
                        <span className="see-all">See all</span>
                        </div>
             </div>
                   <div className="hosdoc-doctor-section">
                   <div className="row h4service-active">
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/folder.png").default} alt=""  />
                            </div>
                            <div className="service-content h4services-content" >
                            <h3 className="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                
                                <a className="service-link" href="services-details.html">Explore  <img src= {require("../img/rah-assets/folder.png").default} alt=""/></a>
                            </div>
                        </div>
                        </div>
        </div>
        <div className="row h4service-active">
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/folder.png").default} alt=""  />
                            </div>
                            <div className="service-content h4services-content" >
                            <h3 className="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                
                                <a className="service-link" href="services-details.html">Explore  <img src= {require("../img/rah-assets/folder.png").default} alt=""/></a>
                            </div>
                        </div>
                        </div>
        </div>
        <div className="row h4service-active">
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/folder.png").default} alt=""  />
                            </div>
                            <div className="service-content h4services-content" >
                            <h3 className="f-700"><a href="#">Sum Hospital</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 location f-600">4 kms away</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">400 Hospital Beds</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600 number">+91 9000000000</p>
                                </div>
                                
                                <a className="service-link" href="services-details.html">Explore  <img src= {require("../img/rah-assets/folder.png").default} alt=""/></a>
                            </div>
                        </div>
                        </div>
        </div>
                   </div>
                             
        </div>
        </div>
       
    )
}

export default HospitalDoctor
