import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
    backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.AGUA),
    color: "black",
    borderRadius: 1
}

const Agua = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Agua Energia" src="/images/energias/Agua.png" />}/>
}

export default Agua;
