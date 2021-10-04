import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.FAIRY),
    }


const Fairy = ({cantidad}) => {
    return <Chip label={`fairy ${cantidad}`} sx={sx} />
}
 
export default Fairy;