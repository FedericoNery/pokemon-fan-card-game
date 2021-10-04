import React from 'react'
import Stack from '@mui/material/Stack';
import Incoloro from './contadores-energias/Incoloro';
import Fuego from './contadores-energias/Fuego';
import Rayo from './contadores-energias/Rayo';
import Tierra from './contadores-energias/Tierra';
import Dragon from './contadores-energias/Dragon';
import Hierba from './contadores-energias/Hierba';
import Agua from './contadores-energias/Agua';
import Fairy from './contadores-energias/Fairy';
import Oscuro from './contadores-energias/Oscuro';
import Lucha from './contadores-energias/Lucha';
import Psiquico from './contadores-energias/Psiquico';
import Metal from './contadores-energias/Metal';
import { Divider } from '@mui/material';

const ContadoresDeEnergias = ({ cantidadesEnergias }) => {
    const { incoloro, fuego, tierra, rayo, dragon, hierba, agua, fairy, oscuro, lucha, psiquico, metal } = cantidadesEnergias

    return <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center">
        <Incoloro cantidad={incoloro} />
        <Fuego cantidad={fuego} />
        <Rayo cantidad={rayo} />
        <Tierra cantidad={tierra} />
        <Dragon cantidad={dragon} />
        <Hierba cantidad={hierba} />
        <Agua cantidad={agua} />
        <Fairy cantidad={fairy} />
        <Oscuro cantidad={oscuro} />
        <Lucha cantidad={lucha} />
        <Psiquico cantidad={psiquico} />
        <Metal cantidad={metal} />
    </Stack>
}

export default ContadoresDeEnergias;