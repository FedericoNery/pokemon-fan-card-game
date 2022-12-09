import { useTheme } from '@emotion/react';
import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react'

const InformacionJugador = ({ nombre }) => {
  const theme = useTheme();
  const isSun = theme.palette.mode === "light"

  return <Grid container spacing={2} alignItems="center">
    <Grid item>
      <Typography variant="overline">
        {nombre}
      </Typography>
    </Grid>
    <Grid item>
      <Avatar alt="Rival" src="/images/mew.gif"
      sx={{ width: 40, height: 40, border: isSun ? '0.1px solid black' : '0.1px solid lightgray' }}/>
    </Grid>
  </Grid>


}

export default InformacionJugador;
