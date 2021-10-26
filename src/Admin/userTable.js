import React from "react";
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBootStrap from "react-bootstrap";
function UserTable(){
    const columns = [{
        dataField: 'id',
        text: 'organization name'
      }, {
        dataField: 'cat',
        text: 'category'
      }, {
        dataField: 'type',
        text: 'type'
      },
      {
        dataField: 'dr',
        text: 'Distance radius'
      },
      {
        dataField: 'no',
        text: 'Ambulance Number'
      }

    ];
    const users=[{id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 1234567890"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"},
    {id :"AIIMS Bhubaneswar" ,cat:"Government" ,type: "Basic" ,dr: "2km",no: "+91 565645515616"}
    
        

    
    ]
return(
    <>
    <div style={{textAlign:"center",fontSize:"75%",justifyContent:"space-between"}}>
           
           <BootstrapTable
               keyField="name"
               data={users}
               columns={columns}
               pagination={ paginationFactory() }
           />
           
          </div>
    </>
)
}
export default UserTable;