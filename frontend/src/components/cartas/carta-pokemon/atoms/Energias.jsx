import { Typography } from '@mui/material';
import React from 'react'

const Energias = ({ cantidad_energia }) => {
    return <Typography variant="body2" color="textSecondary" component="p" align="right">
    Energía: {cantidad_energia}
  </Typography>
}
 
export default Energias;