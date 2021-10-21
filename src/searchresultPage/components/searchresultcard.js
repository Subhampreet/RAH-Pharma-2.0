import React from "react";
import '../styles/searchresultcard.css'
function ResultCard(){
return(
    <>
    <div class="container-fluid d-flex">
    <div class="row m-auto">
        <div class="col-12 col-sm-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="http://via.placeholder.com/" style={{width:"35%"}}  alt="Card image cap"/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
    </>
)
}
export default ResultCard