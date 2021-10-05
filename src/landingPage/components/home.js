import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import '../styles/nice-select.css'
import Emergency_call from './emergency_call';


function Home() {
    const[navOpen, setNavOpen] = useState(false);
    return (
        <div>
            <div className="home__container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html"><img src={require("../img/rah-assets/logo.png").default}/></a>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li><a href="index.html">Hospitals</a></li>
                            <li><a href="services.html">Consultance</a></li>
                            <li><a href="doctor.html">Blood banks</a></li>
                            <li><a href="shop.html">Diagnostics</a></li>
                            <li><a href="blog.html">Ambulance</a></li>
                            <li><a href="#">Emergency</a></li>
                        </ul>
                    </div>
                    <div className="login-section">
                        <i class="fas fa-search"></i>
                        <a data-animation="fadeInLeft" data-delay=".6s" href="#" className="login-btn">Login / Signup</a>
                    </div>
                </div>
                <div className="page-content">
                    <div class="hero-slider-caption hero-slider-caption-2">
                        <h1 class="white-color" data-animation="fadeInUp" data-delay=".4s">Best Doctor & <br/> Better Care</h1>
                    </div>
                    <div class="slider-right-2">
                                        <div class="caregive-box">
                                            <div class="search-form">
                                                <span class="sub-heading">We are here for you</span>
                                                <h3>Search Service</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-xl-12">
                                                    <div class="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                                        <form class="appointment-form-2 home-form" action="#">
                                                            <i class="fas fa-map-marker-alt"></i>
                                                            <div>
                                                            <label for="input">search your area</label>
                                                            <select name="lc" id="lc" class="postform">
                                                                <option value="-1">Choose A Location</option>
                                                                <option class="level-0" value="36">Chicago, United States</option>
                                                                <option class="level-0" value="37">California, United States</option>
                                                            </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12">
                                                    <div class="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                                        <form class="appointment-form-2 home-form" action="#">
                                                        <i class="fas fa-map-marker-alt"></i>
                                                        <div>
                                                            <label for="input">Search</label>
                                                            <select name="lc" id="lc" class="postform">
                                                                <option value="-1">Clinics, doctors, hospitals</option>
                                                                <option class="level-0" value="36">Chicago, United States</option>
                                                                <option class="level-0" value="37">California, United States</option>
                                                            </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 mb-35">
                                                    <div class="inner caregive-btn text-center">
                                                        <a href="appoinment.html" class="btn gray-btn-border">Search</a>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                    </div>
            </div>
            <div className="emergency-call">
          <img src={require('../img/rah-assets/phonecall White.png').default}/>
         </div>
            </div>
        </div>
    )
}

export default Home
