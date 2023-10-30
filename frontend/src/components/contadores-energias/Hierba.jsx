import React from 'react'
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.HIERBA),
    }

const Hierba = ({cantidad}) => {
    return <Chip label={`hierba ${cantidad}`} sx={sx} />
}
 
export default Hierba;