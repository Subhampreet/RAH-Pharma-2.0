import React from 'react'
import '../styles/counter.css'

function counter() {
    return (
        <div>
            <div class="counter">
                <div class="content row justify-content-around">
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter counter-box text-center mb-180">
                            <img src={require('../img/counter/counter-icon-4.png').default} alt="" />
                            <h1><span class="counter">540</span>+</h1>
                            <h6 class="green-color">Expert Doctors</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter counter-box text-center mb-180">
                            <img src={require('../img/counter/counter-icon-5.png').default} alt="" />
                            <h1><span class="counter">899</span>+</h1>
                            <h6 class="green-color">Problem Solve</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter counter-box text-center mb-180">
                            <img src={require('../img/counter/counter-icon-6.png').default} alt="" />
                            <h1><span class="counter">100</span>+</h1>
                            <h6 class="green-color">Award Winner</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="appointment" >
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="appoinment-box-2">
                            <div class="row no-gutters">
                                <div class="col-xl-8 col-lg-12">
                                    <div class="appoinment-box-content">
                                        <div class="about-title mb-40">
                                            <h5 class="pink-color">Free Consultation</h5>
                                            <h1>Get An Appointment For Get Release.</h1>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-6">
                                                <div class="appoinment-form-box d-flex mb-40">
                                                    <div class="appoint-ment-icon">
                                                        <img src={require('../img/icon/caregive-option-icon-3.png').default} alt="" />
                                                    </div>
                                                    <form class="appointment-form-2" action="#">
                                                        <label for="input">your name</label>
                                                        <input type="text" placeholder="Enter Your Name" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6">
                                                <div class="appoinment-form-box d-flex mb-40">
                                                    <div class="appoint-ment-icon">
                                                        <img src={require('../img/icon/caregive-option-icon-4.png').default} alt="" />
                                                    </div>
                                                    <form class="appointment-form-2" action="#">
                                                        <label for="input">your email</label>
                                                        <input type="text" placeholder="Enter Email Address" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6">
                                                <div class="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                                    <div class="appoint-ment-icon">
                                                        <img src={require('../img/icon/caregive-option-icon-2.png').default} alt="" />
                                                    </div>
                                                    <form class="appointment-form-2" action="#">
                                                        <label for="input">select your services</label>
                                                        <select name="lc" id="lc" class="postform">
                                                            <option value="-1">Choose A Service</option>
                                                            <option class="level-0" value="36">Chicago, United States</option>
                                                            <option class="level-0" value="37">California, United States</option>
                                                        </select>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6">
                                                <div class="appoinment-form-box d-flex mb-40">
                                                    <div class="appoint-ment-icon">
                                                        <img src={require('../img/icon/caregive-option-icon-5.png').default} alt="" />
                                                    </div>
                                                    <form class="appointment-form-2" action="#">
                                                        <label for="input">your phone</label>
                                                        <input type="text" placeholder="Enter Your Phone" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-12">
                                                <div class="appoint-button">
                                                    <a href="#" class="btn green-bg-btn">Make Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="appoinment-right f-right">
                                        <img src={require('../img/appoinment/appoinment-right-img.jpg').default} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default counter
