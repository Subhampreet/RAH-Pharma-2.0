import React from "react";

import { Admin ,Resource , ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/Ayushmina-20/HospitalSignup');
 function AdminHs(){
   return(
     <>
      <Admin dataProvider={(dataProvider)}>
         <Resource name="Hospital" list={UserList} />
     </Admin>
     </>
   )
 }
     

export default AdminHs;