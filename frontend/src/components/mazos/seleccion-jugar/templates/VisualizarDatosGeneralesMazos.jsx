import Grid from '@mui/material/Grid';
import React from 'react';
import MazoDatoGeneral from '../organisms/MazoDatoGeneral';

const VisualizarDatosGeneralesMazos = (props) => {
    const { mazos } = props

    return <Grid container spacing={6}>
        {mazos.map((mazo, index) =>
            <Grid item key={`kgridMazoDatoGeneral${index}`} xs={4}>
                <MazoDatoGeneral mazo={mazo} />
            </Grid>)}
    </Grid>

}

export default VisualizarDatosGeneralesMazos;
