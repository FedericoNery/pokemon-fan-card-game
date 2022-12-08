import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.OSCURO),
        color: "white",
        borderRadius: 1
    }

const Oscuro = ({cantidad}) => {
    return <Chip label={`oscuro ${cantidad}`} sx={sx} />
}

export default Oscuro;
