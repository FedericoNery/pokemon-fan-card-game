import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { getBackgroundColorPokemon } from '../../utils/functions';
import ImagenPokemonReducida from '../tienda/jugador/ImagenPokemonReducida';

const CartaPokemonResponsive = (props) => {
    const { ataque, cantidad_energia, defensa, numero, pokemon, tipo_energia,
        onClick, isSeleccionada, indice
    } = props

    const sxRoot = {
        maxWidth: 300,
        backgroundColor: getBackgroundColorPokemon(tipo_energia),
        border: isSeleccionada && "chocolate",
        "border-width": isSeleccionada && "medium",
        "border-style": isSeleccionada && "solid",
    }

    return (
        <Card sx={sxRoot} onClick={() => onClick(numero, indice)}>
            <CardActionArea>
                <CardContent>
                    <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item>
                            <Typography variant="overline" gutterBottom align='center'>
                                {pokemon}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ImagenPokemonReducida numero={numero} nombre={pokemon} />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" gutterBottom>
                                CE: {cantidad_energia}&nbsp;ATK: {ataque}&nbsp;DEF: {defensa}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default React.memo(CartaPokemonResponsive)
