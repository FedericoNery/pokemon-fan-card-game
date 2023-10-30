import { Grid } from '@mui/material';
import React from 'react'
import { usePartidasGanadas } from '../../hooks/usePartidasGanadas';
import { usePartidasPerdidas } from '../../hooks/usePartidasPerdidas';
import PartidasGanadas from './PartidasGanadas';
import PartidasPerdidas from './PartidasPerdidas';

const DashboardJugador = (props) => {
  const ganadas = usePartidasGanadas()
  const perdidas = usePartidasPerdidas()

  return <Grid container spacing={3}>
    <Grid item xs={2}>
      <PartidasGanadas cantidad={ganadas}/>
    </Grid>
    <Grid item xs={2}>
      <PartidasPerdidas cantidad={perdidas}/>
    </Grid>
  </Grid>
}

export default DashboardJugador;