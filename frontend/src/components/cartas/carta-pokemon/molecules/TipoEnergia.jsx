import React from 'react'
import { Grid } from '@mui/material';
import Tipo from '../atoms/Tipo';
import Energias from '../atoms/Energias';

const TipoEnergia = ({tipo, energia}) => {
    return <Grid container spacing={1}>
      <Grid item xs={6}>
        <Tipo tipo_energia={tipo} />
      </Grid>
      <Grid item xs={6}>
        <Energias cantidad_energia={energia}/>
      </Grid>
    </Grid>
  
}
 
export default TipoEnergia;