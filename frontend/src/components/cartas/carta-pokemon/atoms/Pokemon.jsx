import { Typography } from '@mui/material';
import React from 'react'

const Pokemon = ({ pokemon }) => {
    return <Typography gutterBottom variant="h5" component="h2" align="center" color="black">
    {pokemon}
  </Typography>
}

export default Pokemon;
