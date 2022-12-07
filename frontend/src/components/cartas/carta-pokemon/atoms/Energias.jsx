import { Typography } from '@mui/material';
import React from 'react'

const Energias = ({ cantidad_energia, align }) => {
    return <Typography variant="body2" color="black" component="p" align={align}>
    Energía: {cantidad_energia}
  </Typography>
}

Energias.defaultProps = {
  align: "right"
}

export default Energias;
