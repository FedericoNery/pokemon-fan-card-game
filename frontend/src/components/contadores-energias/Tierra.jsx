import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.TIERRA),
    }

const Tierra = ({cantidad}) => {
    return <Chip label={`tierra ${cantidad}`} sx={sx} />
}
 
export default Tierra;