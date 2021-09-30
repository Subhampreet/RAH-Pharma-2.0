import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import '../styles/nice-select.css'


function Home() {
    const[navOpen, setNavOpen] = useState(false);
    return (
        <div>
            <div class="header-menu-area header-padding transparrent-header">
            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-xl-2 col-lg-2 col-md-3">
                        <div class="logo pos-rel">
                            <a href="index.html"><img src={require("../img/rah-assets/logo.png").default}/></a>
                            <div className="hamburger" onClick={ () => setNavOpen(!navOpen)}><i class="fas fa-bars"></i></div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-8 col-md-6">
                        <div class="header__menu header-menu-white">
                            <nav id="mobile-menu">
                                <ul>
                                    <li><a href="index.html">Hospitals</a>
                                    </li>
                                    <li><a href="services.html">Consultance</a>
                                    </li>
                                    <li><a href="doctor.html">Blood banks</a>
                                    </li>
                                    <li><a href="shop.html">Diagnostics</a>
                                    </li>
                                    <li><a href="blog.html">Ambulance</a>
                                    </li>
                                    <li><a href="#">Emergency</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-2 d-none d-lg-block d-xl-block">
                        <div class="header-right f-right">
                        <i class="fas fa-search"></i>
                            <a data-animation="fadeInLeft" data-delay=".6s" href="#" className="login-btn">Login/Signup</a>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-menu mobile-menu-white"></div>
                    </div>
                    <div className={ navOpen ? 'mobile-nav' : 'none'}>
                                <ul>
                                    <li><a href="index.html">Hospitals</a>
                                    </li>
                                    <li><a href="services.html">Consultance</a>
                                    </li>
                                    <li><a href="doctor.html">Blood banks</a>
                                    </li>
                                    <li><a href="shop.html">Diagnostics</a>
                                    </li>
                                    <li><a href="blog.html">Ambulance</a>
                                    </li>
                                    <li><a href="#">Emergency</a>
                                    </li>
                                    <li>Login/Signup</li>
                                </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero-section */}
        <div class="hero-slider">
                <div class="slider-active">
                    <div class="single-slider slider-height slider-height-2 d-flex align-items-center" data-background='../img/slider/slider-bg-2.jpg'>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-6 col-lg-6 col-md-10">
                                    <div class="hero-text hero-text-2 pt-35">
                                        <div class="hero-slider-caption hero-slider-caption-2">
                                            <h1 /*class="white-color"*/ data-animation="fadeInUp" data-delay=".4s">Best Doctor & Better Care</h1>
                                        </div>
                                      
                                    </div>
                                </div>
                                <div class="col-xl-5 offset-xl-1 col-lg-6 col-md-12">
                                    <div class="slider-right-2">
                                        <div class="caregive-box">
                                            <div class="search-form">
                                                <span class="sub-heading">We are here for you</span>
                                                <h3>Find A Care Giver</h3>
                                            </div>
                                            <div class="row">
                                                <div class="col-xl-12">
                                                    <div class="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                                        <div class="appoint-ment-icon">
                                                            <img src="img/icon/caregive-option-icon-2.png" alt=""/>
                                                        </div>
                                                        <form class="appointment-form-2" action="#">
                                                            <label for="input">select your location</label>
                                                            <select name="lc" id="lc" class="postform">
                                                                <option value="-1">Choose A Location</option>
                                                                <option class="level-0" value="36">Chicago, United States</option>
                                                                <option class="level-0" value="37">California, United States</option>
                                                            </select>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12">
                                                    <div class="appoinment-form-box appoinment-form-box-option d-flex mb-40">
                                                        <div class="appoint-ment-icon">
                                                            <img src="img/icon/caregive-option-icon-2.png" alt="" />
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
                                                <div class="col-xl-12 mb-35">
                                                    <div class="inner caregive-btn text-center">
                                                        <a href="appoinment.html" class="btn gray-btn-border">Make Appointment</a>
                                                    </div>
                                                </div>
                                            </div>
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

export default Home
