import { Typography } from "@mui/material";
import React from "react";

const Defensa = ({ defensa }) => {
    return <Typography variant="body2" color="textSecondary" component="p" align="right">
        Defensa: {defensa}
    </Typography>
}

export default Defensa;