import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import ButtonBorrarSeleccionados from "./atoms/ButtonBorrarSeleccionados";
import { borrarUsuarios } from "../../core/services/usuarios";

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

const TablaUsuarios = ({ values, retry }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const handlePurge = async () => {
    /* setDeletedRows([
      ...deletedRows,
      ...rows.filter(
        (r) => selectedRows.filter((sr) => sr.id === r.id).length < 1
      )
    ]);
    setRows(selectedRows); */
    try{
      await borrarUsuarios({ ids : selectedRows});
      retry()  
    }
    catch(error){
      console.log(error)
    }
  };

  return <>
    <DataGrid
      rows={values}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      onSelectionModelChange={(selection) =>  handleSelectionChange(selection)}
    />
    {selectedRows.length > 0 && <ButtonBorrarSeleccionados onClick={handlePurge}/>}
  </>
}

export default TablaUsuarios;