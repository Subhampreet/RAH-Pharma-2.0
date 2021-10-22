import * as React from "react";
import { List, Datagrid,NumberField, TextField, EditButton ,SimpleList} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

export const UserList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
           
                <Datagrid rowClick="edit">
                   <TextField source="id" />
            <TextField source="HospitalName"/>
            <TextField source="Hospital Type" />
            <NumberField source="Contact Number"/>
            <TextField source="Address"/>
            <NumberField source="TotalSeats"/>
            <NumberField source="ICU"/>
            <TextField source="Departments"/>
            <TextField source="Facilities"/>
                
                </Datagrid>
          
        </List>
    );
}
