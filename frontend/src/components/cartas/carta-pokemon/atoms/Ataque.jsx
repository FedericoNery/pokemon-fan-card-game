import { Typography } from '@mui/material';
import React from 'react'

const Ataque = ({ataque}) => {
    return <Typography variant="body2" color="black" component="p" align="left">
    Ataque: {ataque}
  </Typography>
}

export default Ataque;
