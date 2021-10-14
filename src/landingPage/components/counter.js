import React from 'react'
import '../styles/counter.css'

function counter() {
    return (
        <>
            <div class="counter-1">
                <div class="content row justify-content-around">
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter-1 counter-box-1 text-center mb-180">
                            <img src={require('../img/rah-assets/patientserved.png').default} alt="" />
                            <h1><span class="counter-1">780</span>+</h1>
                            <h6 class="green-color">patients served</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter-1 counter-box-1 text-center mb-180">
                            <img src={require('../img/rah-assets/registeredhospitals.png').default} alt="" />
                            <h1><span class="counter-1">300</span>+</h1>
                            <h6 class="green-color">registered hospitals</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter-1 counter-box-1 text-center mb-180">
                            <img src={require('../img/rah-assets/member.png').default} alt="" />
                            <h1><span class="counter-1">200</span>+</h1>
                            <h6 class="green-color">members</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-box">
                <div className="inner-box">
                    <div className="row">
                        <div className="col-sm-12 col-12 col-lg-8">

                            <div className="row pl-40">
                                <div className="box-title row  mt-3">
                                    Help us redefine <br /> healthcare, with RAH.
                                </div>
                            </div>
                            <div className="row mt-5 pl-40">
                                <div className="col-lg-6 col-12">

                                    <div class="row">
                                        <div class="col-lg-2">
                                            <img src={require('../img/rah-assets/entername.png').default} alt="" />
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="card-block appoint-card">
                                                <form class="" action="#">
                                                    <label for="input">your name</label>
                                                    <input type="text" placeholder="Enter Your Name" />
                                                </form>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="col-lg-6 col-12">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <img src={require('../img/rah-assets/entermail.png').default} alt="" />
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="card-block appoint-card">
                                                <form class="" action="#">
                                                    <label for="input">your email</label>
                                                    <input type="text" placeholder="Enter Email Address" />
                                                </form>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row  mt-5 pl-40">
                                <div className="col-lg-6 col-12">

                                    <div class="row">
                                        <div class="col-lg-2">
                                            <img src={require('../img/rah-assets/chooseservice.png').default} alt="" />
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="card-block appoint-card">
                                                <form class="" action="#">
                                                    <label for="input">select your services</label>
                                                    <div class="dropdown">
  <button className="dropdown-toggle  TB" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose service
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
</form>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="col-lg-6 col-12">
                                    <div class="row">
                                        <div class="col-lg-2">
                                        <img src={require('../img/rah-assets/phoneno.png').default} alt="" />
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="card-block appoint-card">
                                            <form class="appointment-form-2" action="#">
                                                        <label for="input">your phone</label>
                                                        <input type="text" placeholder="Enter Your Phone" />
                                                    </form>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                       <div className="row pl-45 pt-40">
                           
                       <button className="appoint-button">BECOME A RAHI</button>
                       </div>
                       
                       
                       
                        </div>



                        <div className="col-sm-12 col-12 col-lg-4">
                            <img src={require('../img/rah-assets/appointmentbanner.png').default} alt="" />
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

export default counter
