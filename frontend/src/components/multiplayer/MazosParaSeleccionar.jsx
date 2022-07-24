import Grid from '@mui/material/Grid';
import React from 'react';
import MazoParaSeleccionar from './MazoParaSeleccionar';

const MazosParaSeleccionar = (props) => {
    const { mazos } = props
    
    return <Grid container spacing={6}>
        {mazos.map((x, index) =>
            <Grid item xs={4}>
                <MazoParaSeleccionar mazo={x} />
            </Grid>)}
    </Grid>

}

export default MazosParaSeleccionar;