import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.DRAGON),
        color: "black",
        borderRadius: 1
    }

const Dragon = ({cantidad}) => {
    return <Chip label={`dragon ${cantidad}`} sx={sx} />
}

export default Dragon;
