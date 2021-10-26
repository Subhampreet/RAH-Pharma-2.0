import React from 'react'
import '../styles/services.css';

function Services3() {
    return (
        <div className="service-3">
        <section className="services-area services-border pos-rel">
            <span className="h4services-bg">
                <img src="" alt="" />
            </span>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="section-title text-center pos-rel mb-75">
                            <div className="section-text pos-rel">
                                <h1>Best Rated Hospitals</h1>
                                <h5>Know all the top ranking hospitals in your state with detailed overview 
                                and patients reviews, at a glance.</h5>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
        <div className="slider">
        <div className="card-slider">

        <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
         
          <div className="card-content">
            <img className="" src={require("../img/rah-assets/bed.png").default} alt="" />
            <div className="text" style={{width:"45%"}}>400 Hospital Beds</div>
            <div className="review" style={{width:"54%",fontSize:"15px",marginRight:"6%"}}><i class="fas fa-star" style={{color:"goldenrod",fontWeight:"300"}}></i> 1.0 Rating</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <div className="card-partition" style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
          <a className="button" style={{width:"54%",marginLeft:"8%",marginTop:"1%"}} href="/">Explore</a> <img src={require("../img/rah-assets/arrow-down.png").default} alt="" />
          <div className="card-content" style={{marginTop:"4%",width:"45%"}}>
            <img className="" src={require("../img/rah-assets/location.png").default} alt="" />
            <div className="text" >4.36 kms away</div>
            </div>
           
          </div>
          
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
          <a className="button" href="/">Explore<img src={require("../img/rah-assets/arrow-down.png").default} alt="" /></a>
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
          <a className="button" href="/">Explore<img src={require("../img/rah-assets/arrow-down.png").default} alt="" /></a>
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
          <a className="button" href="/">Explore<img src={require("../img/rah-assets/arrow-down.png").default} alt="" /></a>
        </div>
     
        </div>
        </div>
        </div>
    )
}

export default Services3
