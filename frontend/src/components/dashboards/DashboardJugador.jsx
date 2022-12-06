import { Grid } from '@mui/material';
import React from 'react'
import { usePartidasGanadas } from '../../hooks/usePartidasGanadas';
import { usePartidasPerdidas } from '../../hooks/usePartidasPerdidas';
import PartidasGanadas from './PartidasGanadas';
import PartidasPerdidas from './PartidasPerdidas';

const DashboardJugador = (props) => {
  const ganadas = usePartidasGanadas()
  const perdidas = usePartidasPerdidas()

  return <Grid container spacing={{ xs: 2, sm: 4, md: 3 }} sx={{justifyContent: "center", display: "flex"}}>
    <Grid item xs={3} sm={4} md={3} sx={{ marginTop: 5}}>
      <PartidasGanadas cantidad={ganadas}/>
    </Grid>
    <Grid item xs={3} sm={4} md={3} sx={{ marginTop: 5}}>
      <PartidasPerdidas cantidad={perdidas}/>
    </Grid>
  </Grid>
}

export default DashboardJugador;
