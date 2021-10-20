import React from 'react'
import Stack from '@mui/material/Stack';
import Incoloro from './Incoloro';
import Fuego from './Fuego';
import Rayo from './Rayo';
import Tierra from './Tierra';
import Dragon from './Dragon';
import Hierba from './Hierba';
import Agua from './Agua';
import Fairy from './Fairy';
import Oscuro from './Oscuro';
import Lucha from './Lucha';
import Psiquico from './Psiquico';
import Metal from './Metal';
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