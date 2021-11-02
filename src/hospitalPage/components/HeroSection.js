import React from "react";
import "../styles/HeroSection.css";

// mui icons
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="left">
        <div className="col1">
          <div>
            <img
              className="imgSm1"
              src="https://i.ibb.co/VSqk27g/Rectangle-715.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="imgSm1"
              src="https://i.ibb.co/wYhpysJ/Rectangle-716.png"
              alt=""
            />
          </div>
          <div className="img">
            <img
              className="imgSm2"
              src="https://i.ibb.co/VtK9W7K/image-33.png"
              alt=""
            />
            <div class="centered">+14 more</div>
          </div>
        </div>
        <div className="col2">
          <div>
            <img
              className="imgLg"
              src="https://i.ibb.co/tm1s8RM/Rectangle-626.png"
              alt=""
            />
          </div>
        </div>
        <div className="carousel">
          <Carousel width="cover">
            <div>
              <img src="https://i.ibb.co/VSqk27g/Rectangle-715.png" className="imgCarousel" />
            </div>
            <div>
              <img src="https://i.ibb.co/wYhpysJ/Rectangle-716.png" className="imgCarousel" />
            </div>
            <div>
              <img src="https://i.ibb.co/VtK9W7K/image-33.png" className="imgCarousel" />

            </div>
            <div>
              <img src="https://i.ibb.co/tm1s8RM/Rectangle-626.png" className="imgCarousel" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="greyish">PRIVATE</div>
          <div className="title">AIIMS Hospital</div>
        </div>
        <div className="middle">
          <div className="middle-left">
          <p className="description">
            ICUs and OPDs 24x7 COVID-19 testing available Speciality in
            Neurology, Orthopedics..
          </p>
          <p className="description">
            ICUs and OPDs 24x7 COVID-19 testing available Speciality in
            Neurology, Orthopedics..
          </p>
          </div>
         
        </div>
        <div className="bottom">
          <div className="title1">Features:</div>
          <div className="menus1">
            <div className="menu1">
              <div className="icon">
                <LocalPharmacyIcon className="iconDetail" />
              </div>
              <div className="feature">Indoor Pharmacy</div>
            </div>
            <div className="menu1">
              <div className="icon">
                <AirlineSeatFlatIcon className="iconDetail" />
              </div>
              <div className="feature">7000+ Beds</div>
            </div>
            <div className="menu1">
              <div className="icon">
                <BloodtypeIcon className="iconDetail" />
              </div>
              <div className="feature">Blood Banks</div>
            </div>
          </div>
        </div>
        <div className="contact">
          <button className="contact1">
            <div>
              <CallIcon className="icon2" />
            </div>
            <div className="contactText1">Contact us</div>
          </button>
          <button className="contact2">
            <div>
              <MailOutlineIcon className="icon3" />
            </div>
            <div className="contactText1">Mail us at</div>
          </button>
        </div>
        <div className="middle-right">
            <img style={{width:"95%",height:"120px",marginTop:"3%"}} src="https://via.placeholder.com/"/>
          </div>
          <div className="middle-right">
            <p>At Gopabandhunagar</p>
          </div>
      </div>
    </div>
  );
}
