import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBootStrap from "react-bootstrap";
import { style } from "@mui/system";
function table(){
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
    const rowStyle = (row, rowIndex) => {
        return rowIndex % 2 === 0 ? { backgroundColor: '#fff4f4'} : {backgroundColor: 'white'} 

      }
      const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
          Showing { from } to { to } of { size } Results
        </span>
      );
      const options = {
        paginationSize: 4,
        pageStartIndex: 1,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList:[5]
      };
    return(
    <>
<div style={{textAlign:"center",fontSize:"75%",justifyContent:"space-between"}}>
           
           <BootstrapTable
               keyField="id"
               data={users}
               columns={columns}
               rowStyle={ rowStyle }
               bordered={false}
               pagination={ paginationFactory(options)}

           />
           
          </div>
    </>
    )
}
export default table;