import React from 'react'
import '../styles/testimonials.css'

function testimonials() {
    return (
        <div class="testimonials-area pt-115 pb-120">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                        <div class="section-title text-center pos-rel mb-70">
                            <div class="section-text pos-rel">
                                <h1>Our Happy Clients Says About Us.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="custom-row testimonials-activation">
                    <div class="col-xl-12">
                        <div class="testi-box-2">
                            <div class="test-rating-inner d-flex justify-content-between mb-30 align-items-center pr-15">
                                <div class="testi-quato-icon testi-quato-icon-green m-0">
                                    <img src={require("../img/rah-assets/quotes.png").default} alt="" />
                                </div>
                                <div class="testi-rating-list">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testi-content-2">
                                <h3>Our Happy Client Say About us Our Happy Client Say About us Our...</h3>
                                <p>Our Happy Client Say About us Our Happy Client Say About us Our Happy Client Say About us, Our Happy Client Say About us Our Happy Client Say About us Our Happy Client Say About us </p>
                            </div>
                            <div class="testi-author d-flex align-items-center mt-30">
                                <div class="testi-author-icon-2">
                                    <img src={require('../img/rah-assets/user1.png').default} alt="" />
                                </div>
                                <div class="testi-author-desination-2">
                                    <h4>Rosalina D. Williamson</h4>
                                    <span>Working At <span class="f-500 green-color">Fleongo</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="testi-box-2">
                            <div class="test-rating-inner d-flex justify-content-between mb-30 align-items-center pr-15">
                                <div class="testi-quato-icon testi-quato-icon-green m-0">
                                    <img src={require('../img/rah-assets/quotes.png').default} alt="" />
                                </div>
                                <div class="testi-rating-list">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="testi-content-2">
                                <h3>Our Happy Client Say About us Our Happy Client Say About us Our...</h3>
                                <p>Our Happy Client Say About us Our Happy Client Say About us Our Happy Client Say About us Our Happy Client Say About us Our Happy Client Say About us Our Happy Client Say About us </p>
                            </div>
                            <div class="testi-author d-flex align-items-center mt-30">
                                <div class="testi-author-icon-2">
                                    <img src={require('../img/rah-assets/user2.png').default} alt="" />
                                </div>
                                <div class="testi-author-desination-2">
                                    <h4>Hiliam D. Wanakanda</h4>
                                    <span>Working At <span class="f-500 green-color">AMNS</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default testimonials
