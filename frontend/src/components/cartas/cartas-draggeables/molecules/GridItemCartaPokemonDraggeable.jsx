import { Grid } from "@mui/material";
import React from "react";

const GridItemCartaPokemonDraggeable = ({ carta, index }) => {
    const { numero } = carta
    return numero.includes("P") &&
        <Grid item xs={6} sm={6} md={4}>
            <CartaPokemonDraggeable {...carta} index={index} itemObject={{ id: `${numero}cm` }}/>
        </Grid>
}
 
export default GridItemCartaPokemonDraggeable;