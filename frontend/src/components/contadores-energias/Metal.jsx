import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.METAL),
        color: "white",
        borderRadius: 1
    }

const Metal = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Metal Energia" src="/images/energias/Metal.png"/>}/>
}

export default Metal;
