import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { getBackgroundColorPokemon } from '../../utils/functions';
import ImagenPokemonReducida from '../tienda/jugador/ImagenPokemonReducida';
import Ataque from './carta-pokemon/atoms/Ataque';
import Defensa from './carta-pokemon/atoms/Defensa';
import Energias from './carta-pokemon/atoms/Energias';
import Pokemon from './carta-pokemon/atoms/Pokemon';
import Tipo from './carta-pokemon/atoms/Tipo';

const CartaPokemonResponsive = (props) => {
    const { ataque, ataque_esp, cantidad_energia, defensa, defensa_esp, numero, pokemon, ps, suma, tipo_energia, velocidad, precio,
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
