import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.PSIQUICO),
        color: "black",
        borderRadius: 1
    }


const Psiquico = ({cantidad}) => {
    return <Chip label={`psiquico ${cantidad}`} sx={sx} />
}

export default Psiquico;
