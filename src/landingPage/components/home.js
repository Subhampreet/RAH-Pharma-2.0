import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import '../styles/nice-select.css'
import Emergency_call from './emergency_call';
import { Link } from "react-router-dom";


function Home() {
    const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  {console.log(openLinks)}
    return (
       
        <>
            <div className="home__container">
                <div className="Navbar">
                    <div className="logo">
                        <img src={require("../img/rah-assets/logo.png").default} />
                    </div>

                <div className="Nav-menu">
                    {openLinks?
                    <div class="Testing">
                            <a href="/hospital">Hospitals</a>
                            <a href="/">Consultance</a>
                            <a href="/">Blood Banks</a>
                            <a href="/">Diagnostics</a>
                            <a href="/">Ambulance</a>
                            <a href="/">Emergency</a>
                            <a><button class="search-btn"> <i class="fas fa-search"></i></button></a>
                            <a> <button href="#" className="login-btn">Login / Signup</button></a>
                    </div>:    
                    
                    <div className="Nav-cont">
                   
                        <div className="topnav">
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
      
                       <button className="ham" onClick={toggleNavbar}><i className="fas fa-bars"></i></button>
                    </div>



                </div>
                
                <div className="page-content">
                    <div className="body">
                        <div className="leftslide">
                            Best Doctor & <br/>Better Care
                        </div>
                        <div className="rightslide">
                            <div className="card">
                                <div className="card-contents">
                                    <div className="firstline">
                                    We are here for you
                                    </div>
                                    <div className="secline">
                                    Search Service
                                    </div>
                                    <div className="search-loc">
                                    <div className="loc-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="menu">
                                            <form className="menu-options" action="#">
                                                <label className="input" for="input">search your area</label>
                                                <select name="lc" id="lc"className="dropdown">
                                                    <option value="-1">Choose a Location</option>
                                                    <option class="level-0" value="36">Chicago, United States</option>
                                                    <option class="level-0" value="37">California, United States</option>
                                                </select>
                                            
                                        </form>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                    <div className="search-loc">
                                    <div className="loc-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="menu">
                                            <form className="menu-options" action="#">
                                                <label className="input" for="input">search your area</label>
                                                <select name="lc" id="lc"className="dropdown">
                                                    <option value="-1">Clinics, doctors, ho..</option>
                                                    <option class="level-0" value="36">Chicago, United States</option>
                                                    <option class="level-0" value="37">California, United States</option>
                                                </select>
                                            
                                        </form>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                </div>
                            
                                    <div className="card-search-button">
                                        <button  className="card-button">Search</button>                                    
                                    </div>

                            </div>
                        </div>

                    </div>                    
                </div>
            </div>


        </>
    )
}

export default Home
