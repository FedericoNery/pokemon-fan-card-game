import { Button } from "@mui/material";
import React from "react";

const BotonActualizarCartas = ({ onClick }) => {
    return <Button variant="contained" onClick={onClick} sx={{marginTop: 2}}>Actualizar</Button>
}

export default BotonActualizarCartas;
