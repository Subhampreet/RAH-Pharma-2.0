import React from "react";
import '../styles/searchresultcard.css'
function ResultCard(){
    return(
        <div class="searchresult_card">
            <div className="body">
                <div className="left">
                    <img src="https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-superJumbo.jpg" />
                </div>
                <div className="right">
                    <h2>Hospital Name</h2>
                    
                </div>
            </div>
        </div>
    )
}
export default ResultCard