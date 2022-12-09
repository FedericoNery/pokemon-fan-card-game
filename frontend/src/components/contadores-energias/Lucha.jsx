import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.LUCHA),
        color: "black",
        borderRadius: 1
    }

const Lucha = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Lucha Energia" src="/images/energias/Lucha.png"/>}/>
}

export default Lucha;
