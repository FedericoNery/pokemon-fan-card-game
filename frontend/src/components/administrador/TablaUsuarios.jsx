import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";

const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'username',
      headerName: 'Username',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    ]

const TablaUsuarios = ({ values }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const rows = values.map(x => ({ 
        id: x.numero, 
        username: x.nombre_usuario,  
        firstName: x.nombre, 
        lastName: x.apellido 
    }))

    return <DataGrid
    rows={rows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    disableSelectionOnClick
  />
}
 
export default TablaUsuarios;