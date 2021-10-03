import React from 'react'
import '../styles/doctor.css';
function Doctor() {
    return (
        <div>
            <section class="team-area pt-115 pb-75">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-title text-center pos-rel mb-70">
                            <div class="section-icon">
                                {/* <img class="section-back-icon" src={require('../img/section/section-back-icon.png').default} alt="" /> */}
                            </div>
                            <div class="section-text pos-rel">
                                <h1>Choose your department</h1>
                            </div>
                            <div class="section-line pos-rel">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row team-activation">
                    <div class="col-xl-12">
                        <div class="team-box pos-rel mb-50">
                            <div class="team-thumb">
                                <img src= {require('../img/rah-assets/Cardiology.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="team-box pos-rel mb-50">
                            <div class="team-thumb">
                                <img src={require('../img/rah-assets/Odontology.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="team-box pos-rel mb-50">
                            <div class="team-thumb">
                                <img src={require('../img/rah-assets/Gynaecology.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="team-box pos-rel mb-50">
                            <div class="team-thumb">
                                <img src={require('../img/rah-assets/Pulmology.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="team-box pos-rel mb-50">
                            <div class="team-thumb">
                                <img src={require('../img/rah-assets/Pedistric.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="team-box pos-rel mb-50">
                            <div class="team-thumb">
                                <img src={require('../img/rah-assets/Dermatology.png').default} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Doctor
