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
  if (cantidadesEnergias === null || cantidadesEnergias === undefined) {
    return <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}
      justifyContent="center"
      alignItems="center">
      <Incoloro cantidad={0} />
      <Fuego cantidad={0} />
      <Rayo cantidad={0} />
      <Tierra cantidad={0} />
      <Dragon cantidad={0} />
      <Hierba cantidad={0} />
      <Agua cantidad={0} />
      <Fairy cantidad={0} />
      <Oscuro cantidad={0} />
      <Lucha cantidad={0} />
      <Psiquico cantidad={0} />
      <Metal cantidad={0} />
    </Stack>
  }
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
