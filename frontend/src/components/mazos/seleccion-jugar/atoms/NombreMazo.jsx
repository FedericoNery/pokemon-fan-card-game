import { Typography } from '@mui/material';
import React from 'react'

const NombreMazo = ({ nombre }) => {
    return <Typography gutterBottom variant="h5" component="h2">
        {nombre}
    </Typography>
}

export default NombreMazo;