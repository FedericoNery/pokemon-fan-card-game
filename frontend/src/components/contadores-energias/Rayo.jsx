import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.RAYO),
        color: "black",
        borderRadius: 1
    }

const Rayo = ({cantidad}) => {
    return <Chip label={`rayo ${cantidad}`} sx={sx} />
}

export default Rayo;
