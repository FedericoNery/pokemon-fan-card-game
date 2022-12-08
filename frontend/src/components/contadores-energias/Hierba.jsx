import React from 'react'
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.HIERBA),
        color: "black",
        borderRadius: 1
    }

const Hierba = ({cantidad}) => {
    return <Chip label={`hierba ${cantidad}`} sx={sx} />
}

export default Hierba;
