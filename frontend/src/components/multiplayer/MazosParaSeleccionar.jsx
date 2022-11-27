import Grid from '@mui/material/Grid';
import React from 'react';
import MazoParaSeleccionar from './MazoParaSeleccionar';

function MazoComponent({ mazo }) {
  return <Grid item xs={4}>
    <MazoParaSeleccionar mazo={mazo} />
  </Grid>
}

const MazosParaSeleccionar = (props) => {
  const { mazos } = props

  return <Grid container spacing={6}>
    {mazos.map((x, index) => <MazoComponent mazo={x} key={index}/>)}
  </Grid>

}

export default MazosParaSeleccionar;
