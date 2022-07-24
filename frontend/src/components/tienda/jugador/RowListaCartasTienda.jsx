import { Grid } from "@mui/material";
import CartaTiendaParaSeleccionar from "./CartaTiendaParaSeleccionar";

const RowListaCartasTienda = ({ cartasChunked }) => {
    return <Grid container
        direction="row"
        spacing={2}
        alignItems="center">
        {cartasChunked.map((x, index) =>
            <Grid item xs={4} md={3} xl={2}>
                <CartaTiendaParaSeleccionar carta={x} indice={index}/>
            </Grid>
        )}

    </Grid>
}

export default RowListaCartasTienda;