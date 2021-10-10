// import React, { useState } from 'react';
// import { Modal } from '@material-ui/core';
// import '../styles/hospital.css'

// function Hospital() {
//     const [modal, setModal] = useState(false);
//     return (
//         <div>
//             <Modal open={modal}> 
//             <div className='modal'>
//                 <div className="modal-content">
//                     <div className="modal-title">
//                    <h2>Images</h2>
//                     {/* <img src={require('./rah-assets/Layer 2 (4).svg').default} alt="" onClick={e=>setModal(false)}/> */}
//                     </div>
//                    <div className="images">
//                     <img src={require('./rah-assets/Rectangle 626.png').default} alt="" />
//                     <img src={require('./rah-assets/Rectangle 715.png').default} alt="" />
//                     <img src={require('./rah-assets/Rectangle 626.png').default} alt="" />
//                     <img src={require('./rah-assets/Rectangle 715.png').default} alt="" />
//                     <img src={require('./rah-assets/Rectangle 626.png').default} alt="" />
//                     <img src={require('./rah-assets/Rectangle 715.png').default} alt="" />
//                    </div>
//                 </div>
//             </div>
//             </Modal>
//             <nav>
//                 <div className="logo">
//                     <img src={require('./rah-assets/logo.png').default} alt="" />
//                 </div>
//                     <ul className="nav-links">
//                         <li><a href="#">Hospitals </a></li>
//                         <li><a href="#">Consultancy</a></li>
//                         <li><a href="#">Blood Banks</a></li>
//                         <li><a href="#">Diagnostics</a></li>
//                         <li><a href="#">Ambulance</a></li>
//                         <li><a href="#">Emergency</a></li>
//                     </ul>
//                     <div className="search-login">
//                     <i class="fas fa-search"></i>
//                         <a href="#login">Login / Signup</a>
//                     </div>
//             </nav>
//             <div className="content">
//                 <div className="side-images">
//                     <img src={require('./rah-assets/Rectangle 626.png').default} alt="" />
//                     <img src={require('./rah-assets/Rectangle 715.png').default} alt="" />
//                     <div className="more-photos" onClick={ () => setModal(true)}>
//                         <p className="load-more">+14 more</p>
//                     </div>
//                 </div>
//                 <div className="main-img">
//                     <img src={require('./rah-assets/Rectangle 626.png').default} alt="" />
//                 </div>
//                 <div className="hospital-details">
//                     <div className="features-head">
//                     <p>PRIVATE</p>
//                     <h1>AIIMS Hospital</h1>
//                     </div>
//                     <p>ICUs and OPDs 24 x 7</p>
//                     <p>COVID-19 testing available</p>
//                     <p>Speciality in Neurology, Orthopedics..</p>
//                     <p>ICUs and OPDs 24 x 7</p>
//                     <p>COVID-19 testing available</p>
//                     <p>Speciality in Neurology, Orthopedics..</p>
//                     <div className="features">
//                         <h4>Features: </h4>
//                         <div className="items">
//                             <div>
//                                 <img src={require('./rah-assets/Group 7050.png').default} alt="" />
//                                 <p>Indoor Pharmacy</p>
//                             </div>
//                             <div>
//                                 <img src={require('./rah-assets/Group 7021.png').default} alt="" />
//                                 <p>7000+ beds</p>
//                             </div>
//                             <div>
//                                 <img src={require('./rah-assets/Group 7049 (1).png').default} alt="" />
//                                 <p>Blood Banks</p>
//                             </div>
//                         </div>
//                         <div className="contacts">
//                             <a href=""><img src={require('./rah-assets/Frame 7157.png').default} alt=""/></a>
//                             <a href=""><img src={require('./rah-assets/Frame 7158.png').default} alt=""/></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hospital