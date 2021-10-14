import React from 'react'
import '../styles/services.css';


function Services1() {
  return (
    <div className="service-1">

      <div className="section-title text-center pos-rel">
        <div className="section-icon">
          <img className="section-back-icon" src={require("../img/rah-assets/hospital-bg.png").default} alt="" />
        </div>

        <div className="section-text pos-abs">
          <h1>Hospitals near you</h1>
          <h5>Fetch details of all the hospitals nearby you and select the best <br /> services from a wide range of options.</h5>
        </div>

        <div className="section-line pos-rel">
          <img src="img/shape/section-title-line.png" alt="" />
        </div>

      </div>


      <div className="slider">
        <div className="card-slider">

        <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/location.png").default} alt="" />
            <div className="text">4 kms away</div>
          </div>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/bed.png").default} alt="" />
            <div className="text">400 Hospital Beds</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <a className="button" href="/">Explore <img src={require("../img/rah-assets/arrow-down.png").default} alt="" /></a>
        </div>



        <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/location.png").default} alt="" />
            <div className="text">4 kms away</div>
          </div>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/bed.png").default} alt="" />
            <div className="text">400 Hospital Beds</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <a className="button" href="/">Explore <img src={require("../img/rah-assets/arrow-down.png").default} alt="" /></a>
        </div>

        <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/location.png").default} alt="" />
            <div className="text">4 kms away</div>
          </div>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/bed.png").default} alt="" />
            <div className="text">400 Hospital Beds</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <a className="button" href="/">Explore <img src={require("../img/rah-assets/arrow-down.png").default} alt="" /></a>
        </div>
        <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/location.png").default} alt="" />
            <div className="text">4 kms away</div>
          </div>
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/bed.png").default} alt="" />
            <div className="text">400 Hospital Beds</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <a className="button" href="/">Explore <img src={require("../img/rah-assets/arrow-down.png").default} alt="" /></a>
        </div>
     
        </div>






      </div>

    </div>
  )
}

export default Services1
