import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.METAL),
        color: "white",
        borderRadius: 1
    }

const Metal = ({cantidad}) => {
    return <Chip label={`metal ${cantidad}`} sx={sx} />
}

export default Metal;
