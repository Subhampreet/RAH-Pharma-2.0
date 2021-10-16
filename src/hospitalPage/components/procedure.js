import React from "react";
import "../styles/Procedures.css";

// mui icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Procedures() {
  return (
    <div className="procedures1">
      <div className="header9">Procedures</div>
      <div className="content1">
        A stepwise guide to the procedural flow of treartment followed by the
        hospital.{" "}
      </div>
      <div className="cardsRow">
        <div className="cardRow">
          <div className="box1" style={{paddingLeft: "60px"}}>Arrival</div>
          <div className="iconRight">
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="cardRow">
          <div className="box1" style={{paddingLeft: "40px"}}>Registration</div>
          <div className="iconRight">
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="cardRow">
          <div className="box1" style={{paddingLeft: "15px"}}>Primary Evaluation</div>
          <div className="iconRight">
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="cardRow">
          <div className="box1" style={{paddingLeft: "19px"}}>Ward Assignment</div>
          <div className="iconRight">
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="cardRow">
          <div className="box1" style={{paddingLeft: "45px"}}>Treatment</div>
          <div className="iconRight">
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="cardRow">
          <div className="box1" style={{paddingLeft: "35px"}}>Bill Clearance</div>
          <div className="iconRight"></div>
        </div>
      </div>
    </div>
  );
}
