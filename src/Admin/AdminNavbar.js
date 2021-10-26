import React from "react";
import {useHistory} from 'react-router'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
function AdminNavbar(){
    const history=useHistory();
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return(
        <>
          <div className="Admin-Navbar">
    
    <div className="Admin-logo">
      <Link to='/'>
        <img src={require("../../src/hospitalPage/img/rah-assets/logo.png").default} />
        </Link>
    </div>

        <div className="Admin-Nav-menu">
            {openLinks?
            <div class="Admin-Testing-2">
                    <a href="/hospital">Hospitals</a>
                    <a href="/">Consultance</a>
                    <a href="/">Blood Banks</a>
                    <a href="/">Diagnostics</a>
                    <a href="/">Ambulance</a>
                    <a href="/">Emergency</a>
                    <a> <button href="#" className="Admin-login-btn">Login / Signup</button></a>
            </div>:    
            
            <div className="Admin-Nav-cont">
           
                <div className="Admin-topnav-2">
                    <a href="/hospital">Hospitals</a>
                    <a href="/">Consultance</a>
                    <a href="/">Blood Banks</a>
                    <a href="/">Diagnostics</a>
                    <a href="/">Ambulance</a>
                    <a href="/">Emergency</a>
                </div>
               

               <div className="Admin-login-section">

               <button href="#" className="Admin-login-btn">Add Hospital</button>
                   <button href="#" className="Admin-login-btn" style={{marginLeft:"6%"}}>Login / Signup</button>

               </div>
              
            </div> 
            }

              {
                openLinks ?
                    <button className="Admin-ham-close" onClick={toggleNavbar}><i className="fas fa-close"></i></button>:
                    <button className="Admin-nav-button" onClick={toggleNavbar}><i className="fas fa-bars"></i></button>
                }

            </div>

            



        </div>
        </>
    )
}
export default AdminNavbar;