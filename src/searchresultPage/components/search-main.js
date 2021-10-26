import React from "react";
import NavBar from '../../hospitalPage/components/hospital'
import SearchBanner from "./searchbanner";
import Footer from "../../landingPage/components/footer";
import Appointment from "../../hospitalPage/components/apppointment";
function SearchMain(){
    return(
        <>
        <NavBar/>
        <SearchBanner/>
        <Appointment/>
        <Footer />
        </>
    )
}
export default SearchMain