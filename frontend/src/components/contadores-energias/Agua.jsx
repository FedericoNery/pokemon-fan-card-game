import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
    backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.AGUA),
    color: "black",
    borderRadius: 1
}

const Agua = ({cantidad}) => {
    return <Chip label={`agua ${cantidad}`} sx={sx} />
}

export default Agua;
