import React from "react";
import Home from "./home";
import Services1 from './services1';
import Services2 from './services2';
import Services3 from './services3';
import Doctor from './doctor';
import Footer from './footer';
import Latest from './latest'
import Counter from './counter'
import Testimonials from './testimonials';
function main_page(){
    return(
        <>
        <Home/>
        <Doctor/>
        <Services1/>
        <Services2/>
        <Services3/>
        <Testimonials/>
        <Counter/>
        <Latest/>
        <Footer/>

        </>
    )
}
export default main_page