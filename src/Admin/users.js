import * as React from "react";
import { List, Datagrid,NumberField, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Hospital Name" />
            <TextField source="Hospital Type" />
            <NumberField source="Contact Number"/>
            <TextField source="Address"/>
            <NumberField source="Total Seats"/>
            <NumberField source="ICU"/>
            <TextField source="Departments"/>
            <TextField source="Facilities"/>
        </Datagrid>
    </List>
);