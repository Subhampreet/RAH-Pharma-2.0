import React from 'react'
import '../styles/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function footer() {
    return (
        <div>
            <div className="footer">
            <div className="footer-top primary-bg pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="footer-contact-info mb-30">
                                <div className="emmergency-call fix">
                                    <div className="emmergency-call-icon f-left">
                                        <i><FontAwesomeIcon icon="phone" className="i" /></i>
                                    </div>
                                    <div className="emmergency-call-text f-left">
                                        <h6>Emergency number</h6>
                                        <span>202-555-0104</span>
                                    </div>
                                </div>
                                <div className="footer-logo mb-35">

                                    <a href="_blank"><img src={require("../img/rah-assets/footerlogo.png").default}/></a>

                                </div>
                                <div className="footer-contact-content mb-25">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                </div>
                                <div className="footer-emailing">
                                    <ul>
                                        <li><img src={require("../img/rah-assets/fi_mail.png").default}/><span className="footer-span">info@examplemedical.com</span></li>
                                        <li><img src={require("../img/rah-assets/folder.png").default}/><span className="footer-span">examplemedical.com</span></li>
                                        <li><img src={require("../img/rah-assets/plus.png").default}/><span className="footer-span">227 Marion Street, Columbia</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                            <div className="footer-widget mb-30">
                                <div className="footer-title">
                                    <h3>Company</h3>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                            <div className="footer-widget mb-30">
                                <div className="footer-title">
                                    <h3>Support</h3>
                                </div>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Terms of services</a></li>
                                        <li><a href="#">Legal</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Status</a></li>
                                    </ul>
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

export default footer
