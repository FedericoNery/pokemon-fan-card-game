import { Grid } from '@mui/material';
import React from 'react'
import SimpleCard from '../SimpleCard';

const DashboardJugador = (props) => {

  return <Grid container spacing={3}>
    <Grid item xs={2}>
      <SimpleCard />
    </Grid>
    <Grid item xs={2}>
      <SimpleCard />
    </Grid>
    <Grid item xs={2}>
      <SimpleCard />
    </Grid>
    <Grid item xs={2}>
      <SimpleCard />
    </Grid>
  </Grid>
}

export default DashboardJugador;