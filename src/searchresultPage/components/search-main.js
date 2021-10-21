import React from "react";
import NavBar from '../../hospitalPage/components/hospital'
import SearchBanner from "./searchbanner";
import Footer from "../../landingPage/components/footer";
function SearchMain(){
    return(
        <>
        <NavBar/>
        <SearchBanner/>
        <Footer />
        </>
    )
}
export default SearchMain