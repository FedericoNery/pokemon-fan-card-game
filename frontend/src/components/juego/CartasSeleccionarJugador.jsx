import { Box } from '@mui/system';
import React from 'react'
import CartaParaSeleccionar from '../cartas/CartaParaSeleccionar';

const CartasSeleccionarJugador = ({ cartas }) => {
    return cartas.map((carta, index) =>
    <Box p={1} m={1}>
        <CartaParaSeleccionar carta={carta} />
    </Box>
)
}
 
export default CartasSeleccionarJugador;