import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.INCOLORO),
        color: "black",
        borderRadius: 1
    }

const Incoloro = ({cantidad}) => {
    return <Chip
    label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Incoloro Energia" src="/images/energias/Incoloro.png" />}
    />
}

export default Incoloro;
