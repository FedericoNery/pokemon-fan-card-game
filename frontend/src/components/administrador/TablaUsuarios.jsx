import React, { useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import ButtonBorrarSeleccionados from "./atoms/ButtonBorrarSeleccionados";
import { borrarUsuarios } from "../../core/services/usuarios";
import { columns } from "./columns";
import { Box } from "@mui/material";
import { ContextToastContainer } from "../ui/toasts/ToastContainer";

const TablaUsuarios = ({ values, retry }) => {
  const toast = useContext(ContextToastContainer)
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
    try {
      await borrarUsuarios({ ids: selectedRows });
      toast.success("Se ha borrado el usuario correctamente")
      retry()
    }
    catch (error) {
      toast.error(error.toString())
    }
  };

  return <>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={values}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(selection) => handleSelectionChange(selection)}
      />
      {selectedRows.length > 0 && <ButtonBorrarSeleccionados onClick={handlePurge} />}
    </Box>
  </>

}

export default TablaUsuarios;
