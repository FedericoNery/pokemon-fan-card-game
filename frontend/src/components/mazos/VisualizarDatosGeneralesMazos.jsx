import Grid from '@mui/material/Grid';
import React from 'react';
import MazoDatoGeneral from './MazoDatoGeneral';

const VisualizarDatosGeneralesMazos = (props) => {
    const { mazos } = props
    
    return <Grid container spacing={6}>
        {mazos.map((x, index) =>
            <Grid item xs={4}>
                <MazoDatoGeneral mazo={x} />
            </Grid>)}
    </Grid>

}

export default VisualizarDatosGeneralesMazos;