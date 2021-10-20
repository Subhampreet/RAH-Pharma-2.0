import React from 'react'
import '../styles/mapbox.css'

function Mapbox(){
    return(
        <>
        <div className="map-box-main">
            <div className="map-box-child">
<div className="map-box-left">
<img src={require('../img/Rectangle.png').default} alt="" />
</div>
<div className="map-box-right">
<h2>Services near you</h2>
                    <div className="body">
                        <div className="mapbox-item-main">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>

                        <div className="mapbox-item">
                            <div className="lefter">
                                <h3>Sunshine Hospital</h3>
                                <h4>3 kms away</h4>
                            </div>

                            <div className="righter">
                                <img />
                                <img />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
        </>

    )
}
export default Mapbox;