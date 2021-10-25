import React from 'react'
import '../styles/doctor.css';
import {useHistory} from 'react-router-dom'
function Doctor() {
  const history=useHistory();
  const imageClick=(e)=>{
    console.log(e.target.id);
    history.push(`/?q=${e.target.id}`)

  }
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
              <img src={require('../img/rah-assets/Cardiology.png').default} alt="" id="cardiology" onClick={imageClick} />
              <img src={require('../img/rah-assets/Odontology.png').default} alt="" id="odontology" onClick={imageClick}/>
              <img src={require('../img/rah-assets/Gynaecology.png').default} alt="" id="gynaecology" onClick={imageClick} />
              <img src={require('../img/rah-assets/Pulmology.png').default} alt="" id="pulmology" onClick={imageClick} />

              <img src={require('../img/rah-assets/Pedistric.png').default} alt="" id="cardiology" onClick={imageClick}/>

              <img src={require('../img/rah-assets/Dermatology.png').default} alt="" id="cardiology" onClick={imageClick}/>
              <img src={require('../img/rah-assets/Pedistric.png').default} alt="" id="cardiology" onClick={imageClick}/>

              <img src={require('../img/rah-assets/Dermatology.png').default} alt="" id="cardiology" onClick={imageClick} />
            </div> 
        </div>      
      </div>
    </>
  )
}
export default Doctor
