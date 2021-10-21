import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import '../styles/searchbanner.css'
import ResultCard from "./searchresultcard";
function SearchBanner(){
    return(
        <>
        <div className="search-result">

            <div className="body">
                <h1>Search Result</h1>
                <p>Bringing you the best medical facilities near you</p>
            </div>
            
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

                <div className="results">
                  
                    {/* <ResultCard/> */}
                </div>
                </div>
        </>

    )
}
export default SearchBanner