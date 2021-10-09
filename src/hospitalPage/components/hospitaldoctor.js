import React from 'react'
import '../styles/hospitaldoctor.css'
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
                    <div className="col-xl-5 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/doctor.png").default} alt=""  />
                            </div>
                            <div className="service-content h4services-content" >
                            <h3 className="f-700"><a href="#">Dr. Srinivas Reddy</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 location f-600">30yrs Clinical Experience.</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">Best Doctor Award 2020</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">People’s Choice Award</p>
                                </div>
                                
                                <a data-animation="fadeInLeft" data-delay=".6s" href="contact.html" className="btn btn-icon btn-icon-green ml-0"><span><img src={require('../img/rah-assets/phonecall Green.png').default} alt="" /></span>Check Availability</a>
                            </div>
                        </div>
                        </div>
        </div>
        <div className="row h4service-active">
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/doctor.png").default} alt=""  />
                            </div>
                            <div className="service-content h4services-content" >
                            <h3 className="f-700"><a href="#">Dr. Srinivas Reddy</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 location f-600">30yrs Clinical Experience.</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">Best Doctor Award 2020</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">People’s Choice Award</p>
                                </div>
                                
                                <a data-animation="fadeInLeft" data-delay=".6s" href="contact.html" className="btn btn-icon btn-icon-green ml-0"><span><img src={require('../img/rah-assets/phonecall Green.png').default} alt="" /></span>Check Availability</a>
                            </div>
                        </div>
                        </div>
        </div>
        <div className="row h4service-active">
                    <div className="col-xl-4 col-lg-6 col-md-6 h4service-main">
                        <div className="h4service-box white-bg mb-30">
                            <div className="service-thumb service1 pos-rel mb-0">
                                <img src={require("../img/rah-assets/doctor.png").default} alt=""  />
                            </div>
                            <div className="service-content h4services-content" >
                            <h3 className="f-700"><a href="#">Dr. Srinivas Reddy</a></h3>
                                <div className="service-content-img-div">
                                <img className="h4-services-content-img" src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 location f-600">30yrs Clinical Experience.</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">Best Doctor Award 2020</p>
                                </div>
                                <div className="service-content-img-div">
                                <img src= {require("../img/rah-assets/folder.png").default} alt=""/>
                                <p className="mb-20 f-600">People’s Choice Award</p>
                                </div>
                                
                                <a data-animation="fadeInLeft" data-delay=".6s" href="contact.html" className="btn btn-icon btn-icon-green ml-0"><span><img src={require('../img/rah-assets/phonecall Green.png').default} alt="" /></span>Check Availability</a>
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