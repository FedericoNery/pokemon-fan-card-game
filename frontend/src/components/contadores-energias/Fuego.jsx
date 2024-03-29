import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.FUEGO),
    }

const Fuego = ({cantidad}) => {
    return <Chip label={`fuego ${cantidad}`} sx={sx} />
}
 
export default Fuego;