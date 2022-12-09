import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.OSCURO),
        color: "white",
        borderRadius: 1
    }

const Oscuro = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Oscuro Energia" src="/images/energias/Oscuro.png"/>}/>
}

export default Oscuro;
