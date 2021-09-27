import React from 'react'
import '../styles/counter.css'

function counter() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter counter-box text-center mb-180">
                            <img src="img/counter/counter-icon-4.png" alt="" />
                            <h1><span class="counter">540</span>+</h1>
                            <h6 class="green-color">Expert Doctors</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter counter-box text-center mb-180">
                            <img src="img/counter/counter-icon-5.png" alt="" />
                            <h1><span class="counter">899</span>+</h1>
                            <h6 class="green-color">Problem Solve</h6>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3">
                        <div class="single-couter counter-box text-center mb-180">
                            <img src="img/counter/counter-icon-6.png" alt="" />
                            <h1><span class="counter">100</span>+</h1>
                            <h6 class="green-color">Award Winner</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default counter
