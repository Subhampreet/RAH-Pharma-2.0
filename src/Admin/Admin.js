import React from "react";


import UserTable from "./userTable";
import Footer from "../hospitalPage/components/footer";
import AdminNavbar from "./AdminNavbar";
 function AdminHs(){
   return(
     <>
      <AdminNavbar/>
     <UserTable/>
     <Footer/>
     </>
   )
 }
     

export default AdminHs;