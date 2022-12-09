import React from 'react'
import Chip from '@mui/material/Chip';
import { CODIGO_TIPO_CARTA, getBackgroundColorPokemon } from '../../utils/functions';
import { Avatar } from '@mui/material';

const sx = {
        backgroundColor: getBackgroundColorPokemon(CODIGO_TIPO_CARTA.PSIQUICO),
        color: "black",
        borderRadius: 1
    }


const Psiquico = ({cantidad}) => {
    return <Chip label={`${cantidad}`} sx={sx}
    avatar={<Avatar alt="Psiquico Energia" src="/images/energias/Psiquico.png"/>}/>
}

export default Psiquico;
