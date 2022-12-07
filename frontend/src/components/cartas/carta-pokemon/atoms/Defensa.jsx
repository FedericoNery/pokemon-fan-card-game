import { Typography } from "@mui/material";
import React from "react";

const Defensa = ({ defensa, align }) => {
    return <Typography variant="body2" color="black" component="p" align={align}>
        Defensa: {defensa}
    </Typography>
}

Defensa.defaultProps = {
    align: "right"
}

export default Defensa;
