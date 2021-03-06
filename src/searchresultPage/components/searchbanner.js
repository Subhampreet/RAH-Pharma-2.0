import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import '../styles/searchbanner.css'
import ResultCard from "./searchresultcard";
function SearchBanner(){
    return(
        <>
        <div className="search-result">

            
            <div className="body-bar">
            <div class="bar">
      <input class="searchbar" type="text" title="Search"></input>
     
      <button div className="search-button">search</button>
    
      </div>
   
    </div>
    <div className="body">
                <h1>Search Result</h1>
                <p>Bringing you the best medical facilities near you</p>
            </div>
                <div className="results">
                  
                    <ResultCard/>
                </div>
                </div>
        </>

    )
}
export default SearchBanner