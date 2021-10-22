import React from "react";

import { Admin ,Resource , ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import './styles.css'

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/Ayushmina-20/HospitalSignup');
 function AdminHs(){
   return(
     <div className="Admin-dash">
      <Admin dataProvider={(dataProvider)}>
         <Resource  name="Hospital" list={UserList} />
     </Admin>
     </div>
   )
 }
     

export default AdminHs;