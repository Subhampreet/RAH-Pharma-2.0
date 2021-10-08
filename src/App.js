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


function App() {
  return (
    <div className="landingPage">
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Doctor} />
      <Route exact path="/" component={Services1} />
      <Route exact path="/" component={Services2} />
      <Route exact path="/" component={Services3} />
      <Route exact path="/" component={Testimonials} />
      <Route exact path="/" component={Counter} />
      <Route exact path="/" component={Latest} />
      <Route exact path="/" component={Footer} />
      <Route exact path="/hospital" component={Department} /> 
      <Route exact path="/hospital" component={HospitalDoctor} />
      <Route exact path="/hospital" component={Procedure} />
      <Route exact path="/hospital" component={ValueService} />
      <Route exact path="/hospital" component={Review} />  
      <Route exact path="/hospital" component={AppointmentHospital} />
      <Route exact path="/hospital" component={FooterHospital} />
       
    </div>
  );
}

export default App;
