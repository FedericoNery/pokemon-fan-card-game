import { Grid } from '@mui/material';
import React from 'react'
import Ataque from '../atoms/Ataque';
import Defensa from '../atoms/Defensa';

const AtaqueDefensa = () => {
    return <Grid container >
    <Grid item xs={6} >
        <Ataque />
    </Grid>
    <Grid item xs={6} >
        <Defensa />
    </Grid>
  </Grid>
}
 
export default AtaqueDefensa;