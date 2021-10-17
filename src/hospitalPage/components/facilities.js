import React from "react";
import "../styles/facilities.css";

// mui icons
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Facilities() {
  return (
    <div className="facilitiesSection">
      <div className="header">Facilities</div>
      <div className="cards">
        <div className="card1">
          <div>
            <LocalDrinkIcon className="icon5" style={{fontSize: "60px"}}/>
          </div>
          <div className="title3">Hygiene</div>
          <div className="para3">
            General ward bed - Rs 500/day ICU bed - RS 1000/day All blood types
            available 24x7 blood donation service Organ storage for
            transplantation
          </div>
        </div>
        <div className="card1">
          <div>
            <DirectionsCarFilledIcon className="icon5" style={{fontSize: "60px"}}/>
          </div>
          <div className="title3">Transport</div>
          <div className="para3">
            All blood types available 24x7 blood donation service Organ storage
            for transplantation Quick and easy purchase 24x7 pharmacy service
          </div>
        </div>
        <div className="card1">
          <div>
            <FavoriteBorderIcon className="icon5" style={{fontSize: "60px"}}/>
          </div>
          <div className="title3">OPD services</div>
          <div className="para3">
            All blood types available 24x7 blood donation service Organ storage
            for transplantation Quick and easy purchase 24x7 pharmacy service
          </div>
        </div>
        <div className="card1">
          <div>
            <DescriptionIcon className="icon5" style={{fontSize: "60px"}}/>
          </div>
          <div className="title3">Other facilities</div>
          <div className="para3">
            All blood types available 24x7 blood donation service Organ storage
            Quick and easy purchase 24x7 pharmacy service
          </div>
        </div>
      </div>
    </div>
  );
}
