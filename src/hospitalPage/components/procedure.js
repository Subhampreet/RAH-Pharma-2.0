import React from 'react'
import '../styles/procedure.css';

function Procedure() {
    return (
        <div className="procedure-cont">
            <div className="procedure-body">
                <div className="procedure-title">
                    Procedure
                </div>
                <div className="procedure-title-text">
                    A stepwise guide to the procedural flow of  treartment followed by the hospital.   
                </div>
                <div className="procedures">
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/arrival.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/arrowright.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/registration.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/arrowright.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/primaryevaluation.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/arrowright.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/wardassignment.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/arrowright.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/treatment.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/arrowright.png').default}/>
                     </div>
                     <div className="procedure-item">
                         <img src={require('../img/rah-assets/billclearance.png').default}/>
                     </div>
                     
                </div>

            </div>
        </div>
    )
}

export default Procedure
