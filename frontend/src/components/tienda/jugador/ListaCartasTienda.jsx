import { Grid } from "@mui/material";
import React from "react";
import CartaTiendaParaSeleccionar from "./CartaTiendaParaSeleccionar";
import RowListaCartasTienda from "./RowListaCartasTienda";

const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

// Examples
//chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);     // [[1, 2, 3], [4, 5, 6], [7, 8]]
//chunk([1, 2, 3, 4, 5, 6, 7, 8], 4);     // [[1, 2, 3, 4], [5, 6, 7, 8]]

const ListaCartasTienda = ({ cartas }) => {
    const chunkedCartas = chunk(cartas, 5);
    //return chunkedCartas.map(x => <RowListaCartasTienda cartasChunked={x} />)

    return <Grid container
        direction="row"
        spacing={2}
        alignItems="center">
        {cartas.map((x, index) =>
            <Grid item xs={4} md={3} xl={2}>
                <CartaTiendaParaSeleccionar carta={x} indice={index} />
            </Grid>
        )}

    </Grid>
}

export default ListaCartasTienda;