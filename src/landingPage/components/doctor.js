import React from 'react'
import '../styles/doctor.css';
function Doctor() {
  return (
    <>
    <div className="doctor">
        <div className="body">
            <div className="heading">        
              Choose your department
            </div>

            <div className="line-design">
              <img src={require('../img/shape/section-title-line.png').default} alt="" />
            </div>

            {/* <div className="parent-line">
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div> */}

            <div className="Slider">
              <img src={require('../img/rah-assets/Cardiology.png').default} alt="" />
              <img src={require('../img/rah-assets/Odontology.png').default} alt="" />
              <img src={require('../img/rah-assets/Gynaecology.png').default} alt="" />
              <img src={require('../img/rah-assets/Pulmology.png').default} alt="" />

              <img src={require('../img/rah-assets/Pedistric.png').default} alt="" />

              <img src={require('../img/rah-assets/Dermatology.png').default} alt="" />
              <img src={require('../img/rah-assets/Pedistric.png').default} alt="" />

              <img src={require('../img/rah-assets/Dermatology.png').default} alt="" />
            </div> 
        </div>      
      </div>
    </>
  )
}
export default Doctor
