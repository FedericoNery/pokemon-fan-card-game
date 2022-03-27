import { Button } from "@mui/material";
import React from "react";

const ButtonBorrarSeleccionados = ({onClick}) => {
    return <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onClick}
    >
        Borrar seleccionados
    </Button>
}

export default ButtonBorrarSeleccionados;