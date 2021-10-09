import React from 'react'
import '../styles/facilities.css'

function Facilities() {
    return (
        <div className="facilities">
                <h1>Facilities</h1>
            <div className="facilities-content">
                <div className="box-1">
                    <img src={require('./rah-assets/clear.png').default} alt="" />
                    <h2>Hygiene</h2>
                    <p>General ward bed - Rs 500/day</p>
                    <p>ICU bed - Rs 1000/day</p>
                    <p>All Blood types available</p>
                    <p>24 x 7 blood donation service</p>
                    <p>Organ Storage for Transplantation</p>
                </div>
                <div className="box-2">
                    <img src={require('./rah-assets/car.png').default}  alt=""/>
                    <h2>Transport</h2>
                    <p>All Blood types available</p>
                    <p>24 x 7 blood donation service</p>
                    <p>Organ Storage for Transplantation</p>
                    <p>Quick and easy purchase</p>
                    <p>24 x 7 pharmacy service</p>
                </div>
                <div className="box-3">
                    <img src={require('./rah-assets/heartheart.png').default} alt="" />
                    <h2>OPD Services</h2>
                    <p>All blood types are available</p>
                    <p>24 x 7 blood donation service</p>
                    <p>Organ Storage for Transplantation</p>
                    <p>Quick and easy purchase</p>
                    <p>24 x 7 pharmacy service</p>
                </div>
                <div className="box-4">
                    <img src={require('./rah-assets/view-list.png').default} alt="" />
                    <h2>Other Facilities</h2>
                    <p>All blood types are available</p>
                    <p>24 x 7 blood donation service</p>
                    <p>Organ Storage</p>
                    <p>Quick and easy purchase</p>
                    <p>24 x 7 pharmacy service</p>
                </div>
            </div>
        </div>
    )
}

export default Facilities