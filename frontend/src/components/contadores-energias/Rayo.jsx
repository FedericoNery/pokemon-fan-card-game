import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.RAYO),
        color: "black",
        borderRadius: 1
    }

const Rayo = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Rayo Energia" src="/images/energias/Rayo.png"/>}/>
}

export default Rayo;
