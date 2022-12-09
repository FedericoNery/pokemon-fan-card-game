import { Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';
import React from 'react';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.HIERBA),
        color: "black",
        borderRadius: 1
    }

const Hierba = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Hierba Energia" src="/images/energias/Hierba.png"/>}/>
}

export default Hierba;
