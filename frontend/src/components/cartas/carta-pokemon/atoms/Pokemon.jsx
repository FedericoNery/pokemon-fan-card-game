import { Typography } from '@mui/material';
import React from 'react'

const Pokemon = ({ pokemon }) => {
    return <Typography gutterBottom variant="h5" component="h2" align="center">
    {pokemon}
  </Typography>
}
 
export default Pokemon;