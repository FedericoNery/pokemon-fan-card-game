import { Box } from '@mui/system';
import React from 'react'
import CartaParaSeleccionar from '../cartas/CartaParaSeleccionar';

const CartasSeleccionarJugador = ({ cartas }) => {
  console.log("CARTAS", cartas)
    return cartas.length > 0 && cartas.map((carta, index) =>
    <Box p={1} m={1}>
        <CartaParaSeleccionar carta={carta} />
    </Box>
)
}

export default CartasSeleccionarJugador;
