import { Box } from '@mui/system';
import React from 'react'
import CartaParaSeleccionar from '../cartas/CartaParaSeleccionar';

const CartasSeleccionarJugador = ({ cartas }) => {
    return cartas.length > 0 && cartas.map((carta, index) =>
    <Box p={1} m={1} key={`keyCartSeleJuga${index}`}>
        <CartaParaSeleccionar carta={carta} />
    </Box>
)
}

export default CartasSeleccionarJugador;
