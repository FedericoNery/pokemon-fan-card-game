
import { Grid } from "@mui/material";
import React from "react";

const GridItemCartaEnergiaDraggeable = ({ carta, index }) => {
    const { numero } = carta
    return numero.includes("E") &&
        <Grid item xs={6} sm={6} md={4}>
            <CartaEnergiaDraggeable {...carta} index={index} itemObject={{ id: `${numero}cm` }}/>
        </Grid>
}
 
export default GridItemCartaEnergiaDraggeable;
