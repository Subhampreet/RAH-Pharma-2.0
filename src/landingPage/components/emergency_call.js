import React from 'react'
import '../styles/emergency_call.css';

function Emergency_call() {
    return (
        <div>
         <div className="emergency_call">
          <img src={require('../img/rah-assets/phonecall White.png').default}/>
          <div className="overlay" style={{width:"400%",height:"auto"}}>
              Helpline Number<br/>
              0987654321
          </div>
         </div> 
        </div>
    )
}

export default Emergency_call
