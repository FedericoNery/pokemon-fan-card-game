import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.LUCHA),
    }

const Lucha = ({cantidad}) => {
    return <Chip label={`lucha ${cantidad}`} sx={sx} />
}
 
export default Lucha;