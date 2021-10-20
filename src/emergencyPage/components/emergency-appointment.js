import React from 'react'
import '../styles/emergencyappointment.css'


function EmergencyApppointment() {
    return (
        <section className="emergency-outer-box pos-rel">
                <div class="container">
                    <div className="service-box">
                        <div className="left">
                            <div className="body">
                                <h1>Help us redefine <br /> healthcare, with RAH.</h1>

                                <div className="form-line">
                                    <div className="element">
                                        {/* <img src={require('../img/rah-assets/entername.png').default} alt="" /> */}
                                        <form class="" action="#">
                                            <label for="input">Your name</label>
                                            <input type="text" placeholder="Enter Your Name" />
                                        </form>

                                    </div>
                                    <div className="element">
                                        {/* <img src={require('../img/rah-assets/entermail.png').default} alt="" /> */}
                                        <form class="" action="#">
                                            <label for="input">Your Email ID</label>
                                            <input type="text" placeholder="Enter Email Address" />
                                        </form>

                                    </div>
                                </div>
                                
                                <div className="form-line">
                                    <div className="element">
                                        {/* <img src={require('../img/rah-assets/chooseservice.png').default} alt="" /> */}
                                        <form class="" action="#">
                                            <label for="input">Select your services</label>
                                            <div class="dropdown">
                                                <button className="dropdown-toggle  TB" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Choose service
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="element">
                                        {/* <img src={require('../img/rah-assets/phoneno.png').default} alt="" /> */}
                                        <form class="" action="#">
                                            <label for="input">Your phone No</label>
                                            <input type="text" placeholder="Enter Your Phone" />
                                        </form>

                                    </div>
                                </div>

                                <div className="row pl-20 pt-30">
                                    <button className="appoint-button">BECOME A RAHI</button>
                                </div>

                            </div>
                        </div>
                        <div className="right">
                            <img className="img-fluid" src={require('../img/appointmentbanner.png').default} alt="" />
                        </div>
                    </div>
           
                </div>
            </section>
            
    )
}

export default EmergencyApppointment
