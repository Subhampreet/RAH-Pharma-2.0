import * as React from "react";
import { useState } from "react";
import '../styles/hospital.css'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


// mui icons
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

// modal css


export default function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  // // modal js
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div className="Navbar navbar-dark">
    
            <div className="logo">
                <img src={require("../img/rah-assets/logo.png").default} />
            </div>

                <div className="Nav-menu">
                    {openLinks?
                    <div class="Testing-2">
                            <a href="/hospital">Hospitals</a>
                            <a href="/">Consultance</a>
                            <a href="/">Blood Banks</a>
                            <a href="/">Diagnostics</a>
                            <a href="/">Ambulance</a>
                            <a href="/">Emergency</a>
                            <a> <button href="#" className="login-btn">Login / Signup</button></a>
                    </div>:    
                    
                    <div className="Nav-cont">
                   
                        <div className="topnav-2">
                            <a href="/hospital">Hospitals</a>
                            <a href="/">Consultance</a>
                            <a href="/">Blood Banks</a>
                            <a href="/">Diagnostics</a>
                            <a href="/">Ambulance</a>
                            <a href="/">Emergency</a>
                        </div>
                       

                       <div className="login-section">

                           <button class="search-btn"> <i class="fas fa-search"></i></button>
                           <button href="#" className="login-btn">Login / Signup</button>

                       </div>
                      
                    </div> 
                    }

                      {
                        openLinks ?
                            <button className="ham-close" onClick={toggleNavbar}><i className="fas fa-close"></i></button>:
                            <button className="nav-button" onClick={toggleNavbar}><i className="fas fa-bars"></i></button>
                        }
      
                    </div>
     
                    



                </div>
  );
}
