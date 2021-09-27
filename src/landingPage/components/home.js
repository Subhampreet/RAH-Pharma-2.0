import React from 'react'
import '../styles/home.css'
import '../styles/nice-select.css'


function home() {
    return (
        <div>
            <div class="header-menu-area header-padding transparrent-header">
            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-xl-2 col-lg-2 col-md-3">
                        <div class="logo pos-rel">
                            <a href="index.html"><img src={require("../img/logo/logo-2.png").default}/></a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-8 col-md-6">
                        <div class="header__menu header-menu-white">
                            <nav id="mobile-menu">
                                <ul>
                                    <li><a href="index.html">Home +</a>
                                        <ul class="submenu">
                                            <li><a href="index.html">Home style 1</a></li>
                                            <li><a href="index-2.html">Home style 2</a></li>
                                            <li><a href="index-3.html">Home style 3</a></li>
                                            <li><a href="index-4.html">Home style 4</a></li>
                                            <li><a href="index-5.html">Home style 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="services.html">Department +</a>
                                        <ul class="submenu">
                                            <li><a href="services.html">Services 01</a></li>
                                            <li><a href="services-2.html">Services 02</a></li>
                                            <li><a href="services-details.html">Services Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="doctor.html">Doctors +</a>
                                        <ul class="submenu">
                                            <li><a href="doctor.html">Doctors 01</a></li>
                                            <li><a href="doctor-2.html">Doctors 02</a></li>
                                            <li><a href="doctor-details.html">Doctors Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">Shop</a>
                                        <ul class="submenu">
                                            <li><a href="shop.html">Shop Page</a></li>
                                            <li><a href="product-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Shopping Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">News +</a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                            <li><a href="blog-2-col.html">Blog 2 Column</a></li>
                                            <li><a href="blog-2-col-mas.html">Blog 2 Col Masonry</a></li>
                                            <li><a href="blog-3-col.html">Blog 3 Column</a></li>
                                            <li><a href="blog-3-col-mas.html">Blog 3 Col Masonry</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                            <li><a href="blog-details-left-sidebar.html">Details Left Sidebar</a></li>
                                            <li><a href="blog-details-audio.html">Details Audio</a></li>
                                            <li><a href="blog-details-video.html">Details Video</a></li>
                                            <li><a href="blog-details-gallery.html">Details Gallery</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages +</a>
                                        <ul class="submenu">
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="appoinment.html">Appoinment</a></li>
                                            <li><a href="portfolio-2-col.html">Portfolio 2 column</a></li>
                                            <li><a href="portfolio.html">Portfolio 3 column</a></li>
                                            <li><a href="portfolio-slider.html">Portfolio Slider</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-2 d-none d-lg-block d-xl-block">
                        <div class="header-right f-right">
                            <a data-animation="fadeInLeft" data-delay=".6s" href="#" class="btn btn-icon btn-icon-green"><span>+</span>contact
                                us</a>
                            <a data-animation="fadeInLeft" data-delay=".6s" href="#" class="btn btn-icon btn-icon-white"><i class="fas fa-phone"></i>Make
                                A Call</a>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile-menu mobile-menu-white"></div>
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
                                            <h5 /*class="white-color"*/ data-animation="fadeInUp" data-delay=".2s">We are here for your care.</h5>
                                            <h1 /*class="white-color"*/ data-animation="fadeInUp" data-delay=".4s">Best Care & Better Doctor.</h1>
                                        </div>
                                        <div class="hero-slider-btn">
                                            <a data-animation="fadeInLeft" data-delay=".6s" href="about.html" class="btn btn-icon btn-icon-blue ml-0"><span>+</span>about us</a>
                                            <a data-animation="fadeInRight" data-delay="1.0s" href="https://www.youtube.com/watch?v=eXQgPCsd83c" class="play-btn popup-video"><i class="fas fa-play"></i></a>
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

export default home
