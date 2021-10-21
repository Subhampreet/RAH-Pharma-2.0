import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import '../styles/searchbanner.css'
import ResultCard from "./searchresultcard";
function SearchBanner(){
    return(
        <>
        <div className="search-result">
            <div className="dummy">
            Why do we use it?
It is a long established fact that a reader will be distracted by the
 readable content of a page when looking at its layout. The point of using 
 Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
 as opposed to using 'Content here, content here', making it look like readable
  English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
   their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
    (injected humour and the like).
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
                    <h5>Search Results</h5>
                    <ResultCard/>
                </div>
                </div>
        </>

    )
}
export default SearchBanner