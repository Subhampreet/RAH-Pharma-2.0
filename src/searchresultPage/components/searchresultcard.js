import React from "react";
import '../styles/searchresultcard.css'
function ResultCard(){
    return(
        <div class="searchresult_card">
             
             <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
         
          <div className="card-content">
            <img className="" src={require("../../landingPage/img/rah-assets/bed.png").default} alt="" />
            <div className="text" style={{width:"45%"}}>400 Hospital Beds</div>
            <div className="review" style={{width:"54%",fontSize:"15px",marginRight:"6%"}}><i class="fas fa-star" style={{color:"goldenrod",fontWeight:"300"}}></i> 1.0 Rating</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../../landingPage/img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <div className="card-partition" style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
          <a className="button" style={{width:"54%",marginLeft:"8%",marginTop:"1%"}} href="/">Explore</a> <img src={require("../../landingPage/img/rah-assets/arrow-down.png").default} alt="" />
          <div className="card-content" style={{marginTop:"4%",width:"45%"}}>
            <img className="" src={require("../../landingPage/img/rah-assets/location.png").default} alt="" />
            <div className="text" >4.36 kms away</div>
            </div>
           
          </div>
          
        </div>
        <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
         
          <div className="card-content">
            <img className="" src={require("../../landingPage/img/rah-assets/bed.png").default} alt="" />
            <div className="text" style={{width:"45%"}}>400 Hospital Beds</div>
            <div className="review" style={{width:"54%",fontSize:"15px",marginRight:"6%"}}><i class="fas fa-star" style={{color:"goldenrod",fontWeight:"300"}}></i> 1.0 Rating</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../../landingPage/img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <div className="card-partition" style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
          <a className="button" style={{width:"54%",marginLeft:"8%",marginTop:"1%"}} href="/">Explore</a> <img src={require("../../landingPage/img/rah-assets/arrow-down.png").default} alt="" />
          <div className="card-content" style={{marginTop:"4%",width:"45%"}}>
            <img className="" src={require("../../landingPage/img/rah-assets/location.png").default} alt="" />
            <div className="text" >4.36 kms away</div>
            </div>
           
          </div>
          
        </div>
        <div class="card-1">
          <div class='banner-img'></div>
          <button className="profile-img">Cardiology</button>
          <h1 class="name">SUM Hospital</h1>
         
          <div className="card-content">
            <img className="" src={require("../../landingPage/img/rah-assets/bed.png").default} alt="" />
            <div className="text" style={{width:"45%"}}>400 Hospital Beds</div>
            <div className="review" style={{width:"54%",fontSize:"15px",marginRight:"6%"}}><i class="fas fa-star" style={{color:"goldenrod",fontWeight:"300"}}></i> 1.0 Rating</div>
          </div>
          <div className="card-content">
            <img className="active" src={require("../../landingPage/img/rah-assets/call.png").default} alt="" />
            <div className="text active">+91 9000000000</div>
          </div>
          <div className="card-partition" style={{width:"100%",alignItems:"center",justifyContent:"center",display:"flex"}}>
          <a className="button" style={{width:"54%",marginLeft:"8%",marginTop:"1%"}} href="/">Explore</a> <img src={require("../../landingPage/img/rah-assets/arrow-down.png").default} alt="" />
          <div className="card-content" style={{marginTop:"4%",width:"45%"}}>
            <img className="" src={require("../../landingPage/img/rah-assets/location.png").default} alt="" />
            <div className="text" >4.36 kms away</div>
            </div>
           
          </div>
          
        </div>
        </div>
    )
}
export default ResultCard