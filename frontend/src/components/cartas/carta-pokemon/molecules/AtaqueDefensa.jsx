import { Grid } from '@mui/material';
import React from 'react'
import Ataque from '../atoms/Ataque';
import Defensa from '../atoms/Defensa';

const AtaqueDefensa = ({ataque, defensa}) => {
    return <Grid container >
    <Grid item xs={6} >
        <Ataque ataque={ataque}/>
    </Grid>
    <Grid item xs={6} >
        <Defensa defensa={defensa}/>
    </Grid>
  </Grid>
}
 
export default AtaqueDefensa;