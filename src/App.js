import './App.css';
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
// import './landingPage/styles/bootstrap-min.css'

function App() {
  return (
    <>
      <Home />
      <Doctor/>
      <Services1/>
      <Services2/>
      <Services3/>
      <Testimonials />
      <Counter />
      <Latest />
      <Footer />  
    </>
  );
}

export default App;
