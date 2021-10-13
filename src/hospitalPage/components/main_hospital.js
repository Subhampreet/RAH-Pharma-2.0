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
function main_hospital(){
return(
    <>
    <Hospital/>
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