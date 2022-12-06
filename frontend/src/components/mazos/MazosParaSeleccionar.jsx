import Grid from '@mui/material/Grid';
import React from 'react';
import MazoParaSeleccionar from './MazoParaSeleccionar';

const MazosParaSeleccionar = (props) => {
    const { mazos } = props

    return <Grid container spacing={6}>
        {mazos.map((mazo, index) =>
            <Grid item key={`kgridmazoparaseleccionar${index}`} xs={4}>
                <MazoParaSeleccionar mazo={mazo} />
            </Grid>)}
    </Grid>

}

export default MazosParaSeleccionar;
