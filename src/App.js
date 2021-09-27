import './App.css';
import Footer from './landingPage/components/footer';
import Latest from './landingPage/components/latest'
import './landingPage/styles/responsive.css'
import './fontAwesome'
import Home from './landingPage/components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './landingPage/components/services';
import Services2 from './landingPage/components/services2';
// import './landingPage/styles/bootstrap-min.css'

function App() {
  return (
    <>
      <Home />
      <Services/>
      <Services2/>
      <Services/>
      <Latest />
      <Footer />  
    </>
  );
}

export default App;
