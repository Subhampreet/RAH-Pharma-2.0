import React from "react";
import { Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';
const  UserEdit = (props) => {
    return (
        <>
 <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="HospitalName" validate={required()} />
            <TextInput source="Hospital Type" validate={required()} />
            <TextInput source="Contact Number" validate={required()} />
            <TextInput source="Address" validate={required()} />
            <TextInput source="Total Seats" validate={required()} />
            <TextInput source="ICU" validate={required()} />
            <TextInput source="Departments" validate={required()} />
            <TextInput source="Facilities" validate={required()} />
            
            
            
            
        </SimpleForm>
    </Edit>
        </>
    )
   
}
export default UserEdit