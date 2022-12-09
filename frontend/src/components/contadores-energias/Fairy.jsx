import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.FAIRY),
        color: "black",
        borderRadius: 1
    }


const Fairy = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Fairy Energia" src="/images/energias/Hada.png"/>} />
}

export default Fairy;
