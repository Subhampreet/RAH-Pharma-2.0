import React from "react";
import NavBar from '../../hospitalPage/components/hospital'
import SearchBanner from "./searchbanner";
import Footer from "../../landingPage/components/footer";
import Appointment from "../../hospitalPage/components/apppointment";
import Services3 from "../../landingPage/components/services3";
function SearchMain(){
    return(
        <>
        <NavBar/>
        <SearchBanner/>
        <Services3/>
        <Appointment/>
        <Footer />
        </>
    )
}
export default SearchMain