import React from "react";
import '../styles/searchbox.css'
import NavEmergency from "./nav-energency";
import banner from '../img/banner.png'
import SearchIcon from '@material-ui/icons/Search';
function SearchBox(){
    return(
    <>
      <div className="SearchBar">
      <img src={banner} alt = { banner } style = {{ width: '100%' }} />

            <diV className="body">
                <div className="Nav-Emergency">
                <NavEmergency/>
                </div>
                <h1> Help us Redefine Emergency aid<br/>and healthcare, with RAH</h1>

                <div className="search-body">
                    <div className="search-item">
                        <div className="left">
                            <h3>Your Location</h3>
                            <textarea>Search your area</textarea>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div className="search-item">
                        <div className="left">
                            <h3>Your Location</h3>
                            <textarea>Search your area</textarea>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div className="search-item">
                        <div className="left">
                            <h3>Your Location</h3>
                            <textarea>Search your area</textarea>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div className="search-button">
                        <h4>Search</h4>
                        <SearchIcon className="search-icon" />
                    </div>
                </div>


                <h2>Get Ambulance according to your preferred location</h2>
            </diV>
            </div>
        
    </>
    )
}
export default SearchBox