import React from "react";
import FooterHospital from './footer';
import AppointmentHospital from './apppointment';
import Review from './review'
import Department from './department';
import HospitalDoctor from './hospitaldoctor';
import Procedure from './procedure';
import ValueService from './valueservices';
import Facilities from './facilities';
import Hospital from './hospital';
import HeroSection from './HeroSection';
function main_hospital(){
return(
    <>
    <Hospital/>
    <HeroSection/>
    <Facilities/>
    <Department/>
    <HospitalDoctor/>
    <Procedure/>
    <ValueService/>
    <Review/>
    <AppointmentHospital/>
    <FooterHospital/>
    </>
)
}
export default main_hospital