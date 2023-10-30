import { Typography } from '@mui/material';
import React from 'react'

const InformacionJugador = ({ nombre }) => {
    return <Typography variant="h6" component="h6">
    {nombre}
  </Typography>
}
 
export default InformacionJugador;