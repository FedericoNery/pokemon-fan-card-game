import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.INCOLORO),
    }

const Incoloro = ({cantidad}) => {
    return <Chip label={`incoloro ${cantidad}`} sx={sx} />
}
 
export default Incoloro;