import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
    backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.TIERRA),
    color: "white",
    borderRadius: 1
}

const Tierra = ({ cantidad }) => {
    return <Chip label={`${cantidad}`} sx={sx}
        avatar={<Avatar alt="Tierra Energia" src="/images/energias/Tierra.png" />} />
}

export default Tierra;
