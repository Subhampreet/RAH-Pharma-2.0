import React from "react";
import "../styles/Departments.css";

// mui icons
import MedicationIcon from "@mui/icons-material/Medication";
import HotelIcon from "@mui/icons-material/Hotel";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

export default function Departments() {
  return (
    <div className="departments">
      <div className="header6">Departments</div>
      <div className="cards6">
        <div className="card6">
          <div className="icon6">
            <MedicationIcon className="iconMain6" />
          </div>
          <div className="title6">Cardiology</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <HotelIcon className="iconMain6" />
          </div>
          <div className="title6">7000+ Beds</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <BloodtypeIcon className="iconMain6" />
          </div>
          <div className="title6">Blood Banks</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <DriveEtaIcon className="iconMain6" />
          </div>
          <div className="title6">Ambulance</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <LocalHospitalIcon className="iconMain6" />
          </div>
          <div className="title6">Blood Banks</div>
        </div>
      </div>
      <div className="cards6">
        <div className="card6">
          <div className="icon6">
            <MedicationIcon className="iconMain6" />
          </div>
          <div className="title6">Cardiology</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <HotelIcon className="iconMain6" />
          </div>
          <div className="title6">7000+ Beds</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <BloodtypeIcon className="iconMain6" />
          </div>
          <div className="title6">Blood Banks</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <DriveEtaIcon className="iconMain6" />
          </div>
          <div className="title6">Ambulance</div>
        </div>
        <div className="card6">
          <div className="icon6">
            <LocalHospitalIcon className="iconMain6" />
          </div>
          <div className="title6">Blood Banks</div>
        </div>
      </div>
    </div>
  );
}
