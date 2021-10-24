import React ,{useState} from 'react'
import '../styles/navemergency.css'
import {Link} from 'react-router-dom'
function NavEmergency(){
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    {console.log(openLinks)}
    return(
        <>
         <div className="NavEmergency">
                    <div className="logo">
                        <Link to="/">
                        <img src={require("../img/logo.png").default} />
                        </Link>
                    </div>

                <div className="Nav-menu-emergency">
                    {openLinks?
                    <div class="Testing-emergency">
                            <a href="/hospital">Hospitals</a>
                            <a href="/">Consultance</a>
                            <a href="/">Blood Banks</a>
                            <a href="/">Diagnostics</a>
                            <a href="/">Ambulance</a>
                            <a href="/emergency">Emergency</a>
                            {/* <a><button class="search-btn"> <i class="fas fa-search"></i></button></a> */}
                            <a> <button href="#" className="login-btn">Login / Signup</button></a>
                    </div>:    
                    
                    <div className="Nav-cont-emergency">
                   
                        <div className="topnav-emergency">
                            <a href="/hospital">Hospitals</a>
                            <a href="/">Consultance</a>
                            <a href="/">Blood Banks</a>
                            <a href="/">Diagnostics</a>
                            <a href="/">Ambulance</a>
                            <a href="/emergency">Emergency</a>
                        </div>
                       

                       <div className="login-section-emergency">

                           <button class="search-btn"> <i class="fas fa-search"></i></button>
                           <button href="#" className="login-btn">Login / Signup</button>

                       </div>
                      
                    </div> 
                    }
                        {
                            openLinks ?
                            <button className="ham-close" onClick={toggleNavbar}><i className="fas fa-close"></i></button>:
                            <button className="ham" onClick={toggleNavbar}><i className="fas fa-bars"></i></button>                            
                        }
                    </div>



                </div>
        </>
    )
}
export default NavEmergency