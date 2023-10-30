import { Typography } from '@mui/material';
import React from 'react'
import CantidadCartasMazo from '../atoms/CantidadCartasMazo';
import NumeroMazo from '../atoms/NumeroMazo';

const NumeroMazoCantidadCartasMazo = ({ numeroMazo, cantidadCartasMazo }) => {
    return <Typography variant="body2" color="textSecondary" component="p">
        <NumeroMazo numero={numeroMazo}/>
        <CantidadCartasMazo cantidad={cantidadCartasMazo}/>
    </Typography>
}
 
export default NumeroMazoCantidadCartasMazo;