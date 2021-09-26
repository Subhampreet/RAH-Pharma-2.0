import React from 'react'
import '../styles/latest.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function latest() {
    return (
        <div className="latest">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title pos-rel mb-75">
                            <div className="section-icon">
                                <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                            </div>
                            <div className="section-text pos-rel">
                                <h5>News</h5>
                                <h1>Get Every Single Updates Here.</h1>
                            </div>
                            <div className="section-line pos-rel">
                                <img src="img/shape/section-title-line.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                        <div className="section-button text-right pt-80">
                            <a data-animation="fadeInLeft" data-delay=".6s" href="blog.html" className="btn btn-icon ml-0"><span>+</span>our blog</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news-box mb-30">
                            <div className="latest-news-thumb mb-35">
                                <img src="img/blog/blog-thumb-1.jpg" alt=""/>
                            </div>
                            <div className="latest-news-content">
                                <div className="news-meta mb-10">
                                    <span><a href="#" className="news-tag">Medical,</a></span>
                                    <span><a href="#" className="news-tag">Medicine</a></span>
                                </div>
                                <h3><a href="news-details.html">Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna
                                    aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="latest-news-box mb-30">
                            <div className="latest-news-thumb mb-35">
                                <img src="img/blog/blog-thumb-2.jpg" alt=""/>
                            </div>
                            <div className="latest-news-content">
                                <div className="news-meta mb-10">
                                    <span><a href="#" className="news-tag">Medical,</a></span>
                                    <span><a href="#" className="news-tag">Medicine</a></span>
                                </div>
                                <h3><a href="news-details.html">Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna
                                    aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12">
                        <div className="recent-news-list mb-120">
                            <div className="latest-news-content singl-news news-border-bottom">
                                <h3><a href="news-details.html">Lorem ipsum dolor sit amet, consectetur adidis.</a></h3>
                                <span className="meta-date"><FontAwesomeIcon icon="calendar" className="i"/>23rd Jan 2019</span>
                                <span className="meta-date"><a href="#"><FontAwesomeIcon icon="comments" className="i"/>33 Comments</a></span>
                            </div>
                            <div className="latest-news-content singl-news news-border-bottom">
                                <h3><a href="news-details.html">Lorem ipsum dolor sit amet, consectetur adidis.</a></h3>
                                <span className="meta-date"><FontAwesomeIcon icon="calendar" className="i"/>23rd Jan 2019</span>
                                <span className="meta-date"><a href="#"><FontAwesomeIcon icon="comments" className="i"/>33 Comments</a></span>
                            </div>
                            <div className="latest-news-content singl-news ">
                                <h3><a href="news-details.html">Lorem ipsum dolor sit amet, consectetur adidis.</a></h3>
                                <span className="meta-date"><FontAwesomeIcon icon="calendar" className="i"/>23rd Jan 2019</span>
                                <span className="meta-date"><a href="#"><FontAwesomeIcon icon="comments" className="i"/>33 Comments</a></span>
                            </div>
                        </div>
                        <div className="mk-call-btn f-right mb-30">
                            <a data-animation="fadeInLeft" data-delay=".6s" href="contact.html" className="btn btn-icon btn-icon-green ml-0"><span><i className="fas fa-phone"></i></span>make call</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default latest
