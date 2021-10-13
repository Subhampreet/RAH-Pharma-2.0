import './App.css';
import {Route, Link} from "react-router-dom";

import Footer from './landingPage/components/footer';
import Latest from './landingPage/components/latest'
import Counter from './landingPage/components/counter'
import Testimonials from './landingPage/components/testimonials';
import './landingPage/styles/responsive.css'
import './fontAwesome'
import Home from './landingPage/components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services1 from './landingPage/components/services1';
import Services2 from './landingPage/components/services2';
import Services3 from './landingPage/components/services3';
import Doctor from './landingPage/components/doctor';
import FooterHospital from './hospitalPage/components/footer';
import AppointmentHospital from './hospitalPage/components/apppointment';
import Review from './hospitalPage/components/review'
import Department from './hospitalPage/components/department';
import HospitalDoctor from './hospitalPage/components/hospitaldoctor';
import Procedure from './hospitalPage/components/procedure';
import ValueService from './hospitalPage/components/valueservices';
import Facilities from './hospitalPage/components/facilities';
import Hospital from './hospitalPage/components/hospital';
import main_page from './landingPage/components/main_page';
import main_hospital from './hospitalPage/components/main_hospital';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={main_page} />
      {/* Endpoints for testing purpose */}
      <Route exact path="/doc" component={Doctor} />
      <Route exact path="/ser1" component={Services1} />
      <Route exact path="/ser2" component={Services2} />
      <Route exact path="/ser3" component={Services3} />
      <Route exact path="/test" component={Testimonials} />
      <Route exact path="/count" component={Counter} />
      <Route exact path="/ltst" component={Latest} />
      <Route exact path="/foot" component={Footer} />

       <Route exact path="/hospital" component={main_hospital} />
       {/* End points for testing purpose */}
      <Route exact path="/fac" component={Facilities} />
  

      <Route exact path="/dept" component={Department} /> 
      <Route exact path="/hosdoc" component={HospitalDoctor} />
      <Route exact path="/proc" component={Procedure} />
      <Route exact path="/vs" component={ValueService} />
      <Route exact path="/rev" component={Review} />  
      <Route exact path="/ah" component={AppointmentHospital} />
      <Route exact path="/fh" component={FooterHospital} />
      <Route exact path="/main" component={main_page} />
      <Route exact path="/mainhos" component={main_hospital}/>


     
       
    </div>
  );
}

export default App;
