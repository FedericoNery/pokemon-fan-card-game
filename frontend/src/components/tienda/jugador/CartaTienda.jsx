import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import React from 'react';
import Pokemon from '../../cartas/carta-pokemon/atoms/Pokemon'
import { getBackgroundColorPokemon } from '../../../utils/functions';
import Precio from '../../cartas/carta-pokemon/atoms/Precio';
import ImagenPokemonReducida from './ImagenPokemonReducida';
import Ataque from '../../cartas/carta-pokemon/atoms/Ataque';
import Defensa from '../../cartas/carta-pokemon/atoms/Defensa';
import Energias from '../../cartas/carta-pokemon/atoms/Energias';
import Tipo from '../../cartas/carta-pokemon/atoms/Tipo';

const CartaTienda = (props) => {
    const { ataque, ataque_esp, cantidad_energia, defensa, defensa_esp, numero, pokemon, ps, suma, tipo_energia, velocidad, precio,
        onClick, isSeleccionada, indice
    } = props

    const sxRoot = {
        maxWidth: 300,
        backgroundColor: getBackgroundColorPokemon(tipo_energia),
        border: isSeleccionada && "chocolate",
        "border-width": isSeleccionada && "medium",
        "border-style": isSeleccionada && "solid",
        marginBottom: "10px"
    }

    const sxMedia = {
        objectFit: "contain",
        maxHeight: 180,
        //maxHeight: 140
    }

    return (
        <Card sx={sxRoot} onClick={() => onClick(numero, indice)}>
            <CardActionArea>
                <CardContent>
                    <Grid container spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                        <Grid item xs={5}>
                            <Tipo tipo_energia={tipo_energia} />
                            <Energias cantidad_energia={cantidad_energia} align="left" />
                            <Precio precio={precio} />
                            <Ataque ataque={ataque} />
                            <Defensa defensa={defensa} align="left" />
                        </Grid>
                        <Grid item xs={7}>
                            <ImagenPokemonReducida numero={numero} />
                            <Pokemon pokemon={pokemon} />
                        </Grid>
                    </Grid>


                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default React.memo(CartaTienda)