import React from "react";
import SearchBox from "./search-box";
import Table from './table';
import Mapbox from "./map-box";
import NavEmergency from "./nav-energency";
import EmergencyHeader from "./emergency-header";
import Footer from "../../landingPage/components/footer";
import Appointment from "../../hospitalPage/components/apppointment";
import EmergencyApppointment from "./emergency-appointment";
function MainEmergency(){
    return (
        <>
        
        <SearchBox/>
        <Mapbox/>
<EmergencyHeader/>
        <Table/>
        <EmergencyApppointment/>
        <Footer/>
        </>
    )
}
export default MainEmergency;