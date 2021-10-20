import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import { getBackgroundColorPokemon, getNumeroPokemon } from '../../utils/functions';
import ImagenPokemon from '../atoms/ImagenPokemon';
import Pokemon from '../atoms/Pokemon';
import AtaqueDefensa from '../molecules/AtaqueDefensa';
import TipoEnergia from '../molecules/TipoEnergia';

const CartaPokemon = (props) => {
    const { ataque, ataque_esp, cantidad_energia, defensa, defensa_esp, numero, pokemon, ps, suma, tipo_energia, velocidad,
        onClick, isSeleccionada, indice
    } = props

    const sxRoot = {
        maxWidth: 380,
        backgroundColor: getBackgroundColorPokemon(tipo_energia),
        border: isSeleccionada && "chocolate",
        "border-width": isSeleccionada && "medium",
        "border-style": isSeleccionada && "solid"
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
                    <TipoEnergia tipo={tipo_energia} energia={cantidad_energia}/>
                </CardContent>
                <ImagenPokemon numero={numero} />
                <CardContent>
                    <Pokemon pokemon={pokemon} />
                    <AtaqueDefensa ataque={ataque} defensa={defensa} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default React.memo(CartaPokemon)