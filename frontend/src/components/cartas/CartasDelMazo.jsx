import Grid from '@mui/material/Grid';
import React from 'react';
import StrategyCartasPokemonDraggeables from './cartas-draggeables/StrategyCartasPokemonDraggeables';

const CartasDelMazo = ({cartas}) => {

    return cartas.length > 0 && <Grid container spacing={1}>
        {
            cartas.map((carta, index) => <StrategyCartasPokemonDraggeables key={`kstrcartaspokemondrag${carta.idDraggeable}`} datos_carta={carta}/>)
        }

    </Grid>
}

export default CartasDelMazo;
