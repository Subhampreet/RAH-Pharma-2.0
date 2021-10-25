import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../styles/review.css";

// Star ratings
import StarRatings from "react-star-ratings";

function review() {
  return (
    <div class="testimonials-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
            <div class="section-title text-center pos-rel mb-70"></div>
          </div>
        </div>
        <div class="custom-row testimonials-activation">
          <div class="col-xl-12">
            <div class="testi-box-2 mb-100">
              <div class="test-rating-inner d-flex justify-content-between mb-30 align-items-center">
                <div class="testi-rating-list">
                  <h3 className="rating">Ratings and Reviews:</h3>
                </div>
              </div>
              <div class="testi-content-2 flex-wrap">
                <h1 className="points">5.0</h1>
                <div class="testi-rating-list">
                  <StarRatings
                    rating={2.403}
                    starDimension="23px"
                    starSpacing="1px"
                    starRatedColor="#FFFFFF"
                    starEmptyColor="1B2D2E"
                  />
                </div>
                <br />
                <br />
                <div>
                  <ProgressBar
                    className="progressbar"
                    variant="warning"
                    now={45}
                  />
                  <div className="text">Hygiene</div>
                  <br />
                  <br />
                  <ProgressBar
                    className="progressbar"
                    variant="warning"
                    now={90}
                  />
                  <div className="text">Services</div>
                  <br />
                  <br />
                  <ProgressBar
                    className="progressbar"
                    variant="warning"
                    now={65}
                  />
                  <div className="text">Bloodbanks</div>
                  <br />
                  <br />
                  <ProgressBar
                    className="progressbar"
                    variant="warning"
                    now={85}
                  />
                  <div className="text">Doctors</div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="testi-box-2">
              <div class="test-rating-inner d-flex justify-content-between mb-30 align-items-center">
                <div class="testi-author d-flex align-items-center">
                  <div class="testi-author-icon-2">
                    <img
                      src={require("../img/rah-assets/user2.png").default}
                      alt=""
                    />
                  </div>
                  <div class="flex-wrap">
                    <div class="testi-author-desination-2">
                      <h4>Hiliam D. Wanakanda</h4>
                      <span>CEO, ABC Corporation</span>
                    </div>

                    <div class="testi-rating-list">
                      <StarRatings
                        rating={2.403}
                        starDimension="23px"
                        starSpacing="1px"
                        starRatedColor="#FFFFFF"
                        starEmptyColor="1B2D2E"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimon">
                <h3>Incredible Experience</h3>
                <p>
                  I had an incredible experience with the timely supervision
                  provided by the website, they made such a big difference
                  within our reach.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default review;
